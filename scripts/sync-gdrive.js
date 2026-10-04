import fs from 'fs';
import path from 'path';

const ROOT_FOLDER_ID = '1WROCCh04L3UvlNd59WW6BZ0HldeFqsb5';
const OUTPUT_JSON_PATH = path.resolve('src/data/gdriveProjects.json');
const OUTPUT_TS_PATH = path.resolve('src/data/artGalleryItems.tsx');

function cleanProjectName(rawName) {
  let name = rawName.replace(/\.(png|jpg|jpeg|gif|webp|heic|pdf|mp4|mov|ai|psd)$/i, '');
  name = name.replace(/\s*\(\d+\)$/, ''); // remove (1), (2)
  name = name.replace(/[-_]/g, ' ').trim();
  
  // Format camel/snake case nicely if needed
  if (name.startsWith('DSC')) {
    const num = name.replace('DSC', '').trim();
    return `Photography Shot ${num}`;
  }
  if (name.match(/^\d{8}\s+\d{6}$/)) {
    return `Photo ${name.slice(0, 4)}-${name.slice(4, 6)}-${name.slice(6, 8)}`;
  }
  if (name.startsWith('IMG') && name.includes('WA')) {
    return `Event Moment (${name.slice(-4)})`;
  }
  
  // Capitalize title
  return name
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

async function fetchGoogleDriveFolder(folderId) {
  const url = `https://drive.google.com/drive/folders/${folderId}`;
  const res = await fetch(url);
  return await res.text();
}

function parseSubfolders(html) {
  const folders = [];
  const matches = html.match(/AF_initDataCallback\(\{key: 'ds:\d+', hash: '\d+', data:(.*?)\}\);/gs);
  
  if (matches) {
    for (const block of matches) {
      // Find subfolder blocks: [null, "FOLDER_ID"], ..., "application/vnd.google-apps.folder", ..., [[["FOLDER_NAME", null, 1]]]
      const subfolderRegex = /\[\[\[null,"([a-zA-Z0-9_-]{25,45})"\](?:,[^,\[\]]*)*?,"application\/vnd\.google-apps\.folder"(?:,[^\[\]]*)*?\[\[\["([^"]+)"/g;
      let m;
      while ((m = subfolderRegex.exec(block)) !== null) {
        const id = m[1];
        const name = m[2];
        if (!name.match(/\.(mp4|mov|png|jpg|jpeg|pdf|gif|zip)$/i) && !folders.some(f => f.id === id)) {
          folders.push({ id, name });
        }
      }

      // Backtrack search for folder name
      const nameBlockRegex = /\[\[\["([^"]+)",null,1\]\]\]/g;
      let nm;
      while ((nm = nameBlockRegex.exec(block)) !== null) {
        const folderName = nm[1];
        const pos = nm.index;
        const snippetBefore = block.slice(Math.max(0, pos - 1500), pos);
        if (snippetBefore.includes('application/vnd.google-apps.folder') && !folderName.match(/\.(mp4|mov|png|jpg|jpeg|pdf|gif|zip)$/i)) {
          const idMatches = [...snippetBefore.matchAll(/\[(?:null,)?"([a-zA-Z0-9_-]{25,45})"\]/g)];
          const lastId = idMatches.length ? idMatches[idMatches.length - 1][1] : null;
          if (lastId && lastId !== ROOT_FOLDER_ID && !folders.some(f => f.id === lastId)) {
            folders.push({ id: lastId, name: folderName });
          }
        }
      }
    }
  }

  // Fallback known subfolders if parsing varies by user locale
  const knownSubfolders = [
    { id: '1uzUzPPJIWVlpQZh47CD2ltqiYr5ojxhI', name: 'Posters' },
    { id: '1_Nvt7BV81B7ijBCGEpn2YPh6qYanc9wI', name: 'Random' }
  ];

  for (const kf of knownSubfolders) {
    if (!folders.some(f => f.id === kf.id)) {
      folders.push(kf);
    }
  }

  return folders;
}

function parseFilesFromFolderHtml(html, folderName) {
  const files = [];
  const nameBlockRegex = /\[\[\["([^"]+)",null,1\]\]\]/g;
  let nm;
  
  while ((nm = nameBlockRegex.exec(html)) !== null) {
    const rawName = nm[1];
    const pos = nm.index;
    const snippetBefore = html.slice(Math.max(0, pos - 1500), pos);
    
    // Extract ID and mimeType
    const idMatches = [...snippetBefore.matchAll(/\[(?:null,)?"([a-zA-Z0-9_-]{25,45})"\]/g)];
    const mimeMatches = [...snippetBefore.matchAll(/"(application\/[a-zA-Z0-9\.\+-]+|image\/[a-zA-Z0-9\.\+-]+|video\/[a-zA-Z0-9\.\+-]+)"/g)];
    
    const lastId = idMatches.length ? idMatches[idMatches.length - 1][1] : null;
    const lastMime = mimeMatches.length ? mimeMatches[mimeMatches.length - 1][1] : 'image/png';

    if (lastId && rawName !== folderName && !lastMime.includes('folder') && !files.some(f => f.id === lastId)) {
      const isPdf = lastMime.includes('pdf') || rawName.toLowerCase().endsWith('.pdf');
      const isVideo = lastMime.includes('video') || rawName.toLowerCase().endsWith('.mp4');
      
      files.push({
        id: lastId,
        name: rawName,
        cleanName: cleanProjectName(rawName),
        category: folderName,
        mimeType: lastMime,
        image: `https://lh3.googleusercontent.com/d/${lastId}=w1000`,
        thumbnail: `https://drive.google.com/thumbnail?id=${lastId}&sz=w800`,
        driveUrl: `https://drive.google.com/file/d/${lastId}/view?usp=sharing`,
        pdf: isPdf ? `https://drive.google.com/file/d/${lastId}/view` : undefined,
        isVideo
      });
    }
  }

  return files;
}

async function main() {
  console.log('🚀 Scraping Google Drive link:', `https://drive.google.com/drive/folders/${ROOT_FOLDER_ID}`);
  
  const rootHtml = await fetchGoogleDriveFolder(ROOT_FOLDER_ID);
  const subfolders = parseSubfolders(rootHtml);
  
  console.log(`📁 Extracted Subfolders (Project Categories): ${subfolders.map(f => f.name).join(', ')}`);

  const allProjects = [];
  const categoriesMap = {};

  for (const folder of subfolders) {
    console.log(`\n🔍 Scraping files in category "${folder.name}" (${folder.id})...`);
    const folderHtml = await fetchGoogleDriveFolder(folder.id);
    const files = parseFilesFromFolderHtml(folderHtml, folder.name);
    
    console.log(`   Found ${files.length} project file(s) in "${folder.name}".`);
    categoriesMap[folder.name] = files;
    allProjects.push(...files);
  }

  const outputData = {
    folderId: ROOT_FOLDER_ID,
    folderUrl: `https://drive.google.com/drive/folders/${ROOT_FOLDER_ID}?usp=drive_link`,
    lastUpdated: new Date().toISOString(),
    categories: subfolders.map(f => f.name),
    projects: allProjects
  };

  // Write to src/data/gdriveProjects.json
  fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(outputData, null, 2));
  console.log(`\n✅ Saved scraped data to ${OUTPUT_JSON_PATH}`);

  // Also generate updated artGalleryItems.tsx
  const tsContent = `// Auto-generated from Google Drive folder scrape
// Drive URL: https://drive.google.com/drive/folders/${ROOT_FOLDER_ID}

import crebo1 from "../assets/crebo1.jpg";
import crebo2 from "../assets/crebo2.jpg";
import crebo3 from "../assets/crebo3.jpg";
import lia from "../assets/lia.jpg";
import aqros from "../assets/aqros.png";
import friday from "../assets/friday.png";

export interface ArtGalleryItem {
  id?: string;
  name: string;
  image: string;
  pdf?: string;
  category?: string;
  driveUrl?: string;
  mimeType?: string;
  isVideo?: boolean;
}

export const gdriveCategories = ${JSON.stringify(subfolders.map(f => f.name), null, 2)} as const;

export const projectCategories = [
  ...gdriveCategories,
  "Character Design",
  "Logo Design",
  "Branding",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const gdriveProjects: ArtGalleryItem[] = ${JSON.stringify(
    allProjects.map(p => ({
      id: p.id,
      name: p.cleanName,
      image: p.image,
      category: p.category,
      driveUrl: p.driveUrl,
      pdf: p.pdf,
      mimeType: p.mimeType,
      isVideo: p.isVideo
    })),
    null,
    2
  )};

export const localGalleryItems: ArtGalleryItem[] = [
  { name: "Crebo 1", image: crebo1, category: "Character Design" },
  { name: "Crebo 2", image: crebo2, category: "Character Design" },
  { name: "Lia", image: lia, category: "Character Design" },
  { name: "Crebo 3", image: crebo3, category: "Character Design" },
  { name: "Aqros", image: aqros, category: "Branding" },
  { name: "Friday", image: friday, category: "Branding" },
];

export const artGalleryItems: ArtGalleryItem[] = [
  ...gdriveProjects,
  ...localGalleryItems
];
`;

  fs.writeFileSync(OUTPUT_TS_PATH, tsContent);
  console.log(`✅ Updated ${OUTPUT_TS_PATH}`);
}

main().catch(err => {
  console.error('❌ Scraping error:', err);
  process.exit(1);
});
