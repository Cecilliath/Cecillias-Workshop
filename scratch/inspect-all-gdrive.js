import fs from 'fs';

const ROOT_FOLDER_ID = '1WROCCh04L3UvlNd59WW6BZ0HldeFqsb5';

async function fetchFolder(folderId) {
  const url = `https://drive.google.com/drive/folders/${folderId}`;
  const res = await fetch(url);
  return await res.text();
}

function parseItems(html) {
  const folders = [];
  const files = [];

  const matches = html.match(/AF_initDataCallback\(\{key: 'ds:\d+', hash: '\d+', data:(.*?)\}\);/gs);
  if (!matches) return { folders, files };

  for (const block of matches) {
    // subfolders
    const nameBlockRegex = /\[\[\["([^"]+)",null,1\]\]\]/g;
    let nm;
    while ((nm = nameBlockRegex.exec(block)) !== null) {
      const rawName = nm[1];
      const pos = nm.index;
      const snippetBefore = block.slice(Math.max(0, pos - 1500), pos);
      
      const idMatches = [...snippetBefore.matchAll(/\[(?:null,)?"([a-zA-Z0-9_-]{25,45})"\]/g)];
      const mimeMatches = [...snippetBefore.matchAll(/"(application\/[a-zA-Z0-9\.\+-]+|image\/[a-zA-Z0-9\.\+-]+|video\/[a-zA-Z0-9\.\+-]+)"/g)];
      
      const lastId = idMatches.length ? idMatches[idMatches.length - 1][1] : null;
      const lastMime = mimeMatches.length ? mimeMatches[mimeMatches.length - 1][1] : '';

      if (lastId) {
        if (lastMime.includes('folder') || snippetBefore.includes('application/vnd.google-apps.folder')) {
          if (!folders.some(f => f.id === lastId) && lastId !== ROOT_FOLDER_ID) {
            folders.push({ id: lastId, name: rawName });
          }
        } else if (!files.some(f => f.id === lastId)) {
          files.push({ id: lastId, name: rawName, mime: lastMime });
        }
      }
    }
  }

  return { folders, files };
}

async function scanRecursive(folderId, pathName = '') {
  console.log(`Scanning: ${pathName || 'ROOT'} (${folderId})...`);
  const html = await fetchFolder(folderId);
  const { folders, files } = parseItems(html);

  console.log(`  Found ${folders.length} folders, ${files.length} files.`);
  for (const f of files) {
    console.log(`    [FILE] ${pathName}/${f.name} (id: ${f.id}, mime: ${f.mime})`);
  }

  for (const sub of folders) {
    if (sub.id !== folderId) {
      await scanRecursive(sub.id, `${pathName}/${sub.name}`);
    }
  }
}

scanRecursive(ROOT_FOLDER_ID).catch(console.error);
