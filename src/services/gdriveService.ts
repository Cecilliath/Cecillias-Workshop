import type { ArtGalleryItem } from "../data/artGalleryItems";
import { gdriveProjects } from "../data/artGalleryItems";

export interface GDriveScrapeResult {
  categories: string[];
  projects: ArtGalleryItem[];
  source: 'scraped' | 'cache';
}

const DEFAULT_FOLDER_ID = "1WROCCh04L3UvlNd59WW6BZ0HldeFqsb5";

export async function fetchGoogleDriveProjects(
  folderId: string = DEFAULT_FOLDER_ID
): Promise<GDriveScrapeResult> {
  try {
    const corsProxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      `https://drive.google.com/drive/folders/${folderId}`
    )}`;
    
    const response = await fetch(corsProxyUrl, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Failed to fetch Google Drive folder HTTP ${response.status}`);
    }

    const html = await response.text();
    const subfolders: { id: string; name: string }[] = [];

    // Parse subfolders
    const nameBlockRegex = /\[\[\["([^"]+)",null,1\]\]\]/g;
    let nm: RegExpExecArray | null;

    while ((nm = nameBlockRegex.exec(html)) !== null) {
      const folderName = nm[1];
      const pos = nm.index;
      const snippetBefore = html.slice(Math.max(0, pos - 1500), pos);
      if (
        snippetBefore.includes("application/vnd.google-apps.folder") &&
        !folderName.match(/\.(mp4|mov|png|jpg|jpeg|pdf|gif|zip)$/i)
      ) {
        const idMatches = [...snippetBefore.matchAll(/\[(?:null,)?"([a-zA-Z0-9_-]{25,45})"\]/g)];
        const lastId = idMatches.length ? idMatches[idMatches.length - 1][1] : null;
        if (lastId && lastId !== folderId && !subfolders.some((f) => f.id === lastId)) {
          subfolders.push({ id: lastId, name: folderName });
        }
      }
    }

    if (subfolders.length === 0) {
      // Return cached fallback
      return {
        categories: Array.from(new Set(gdriveProjects.map((p) => p.category).filter(Boolean))) as string[],
        projects: gdriveProjects,
        source: "cache",
      };
    }

    const fetchedProjects: ArtGalleryItem[] = [];

    for (const folder of subfolders) {
      const folderProxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://drive.google.com/drive/folders/${folder.id}`
      )}`;
      const fRes = await fetch(folderProxyUrl);
      if (!fRes.ok) continue;

      const fHtml = await fRes.text();
      let fnMatch: RegExpExecArray | null;

      while ((fnMatch = nameBlockRegex.exec(fHtml)) !== null) {
        const rawName = fnMatch[1];
        const pos = fnMatch.index;
        const snippetBefore = fHtml.slice(Math.max(0, pos - 1500), pos);

        const idMatches = [...snippetBefore.matchAll(/\[(?:null,)?"([a-zA-Z0-9_-]{25,45})"\]/g)];
        const mimeMatches = [...snippetBefore.matchAll(/"(application\/[a-zA-Z0-9\.\+-]+|image\/[a-zA-Z0-9\.\+-]+|video\/[a-zA-Z0-9\.\+-]+)"/g)];

        const lastId = idMatches.length ? idMatches[idMatches.length - 1][1] : null;
        const lastMime = mimeMatches.length ? mimeMatches[mimeMatches.length - 1][1] : "image/png";

        if (lastId && rawName !== folder.name && !lastMime.includes("folder") && !fetchedProjects.some((p) => p.id === lastId)) {
          const isPdf = lastMime.includes("pdf") || rawName.toLowerCase().endsWith(".pdf");
          const isVideo = lastMime.includes("video") || rawName.toLowerCase().endsWith(".mp4");

          let cleanName = rawName.replace(/\.(png|jpg|jpeg|gif|webp|heic|pdf|mp4|mov|ai|psd)$/i, "");
          cleanName = cleanName.replace(/\s*\(\d+\)$/, "").replace(/[-_]/g, " ").trim();

          fetchedProjects.push({
            id: lastId,
            name: cleanName,
            image: `https://lh3.googleusercontent.com/d/${lastId}=w1000`,
            category: folder.name,
            driveUrl: `https://drive.google.com/file/d/${lastId}/view?usp=sharing`,
            pdf: isPdf ? `https://drive.google.com/file/d/${lastId}/view` : undefined,
            mimeType: lastMime,
            isVideo,
          });
        }
      }
    }

    return {
      categories: subfolders.map((f) => f.name),
      projects: fetchedProjects.length > 0 ? fetchedProjects : gdriveProjects,
      source: fetchedProjects.length > 0 ? "scraped" : "cache",
    };
  } catch (err) {
    console.warn("Live Google Drive scrape fallback to cached data:", err);
    return {
      categories: Array.from(new Set(gdriveProjects.map((p) => p.category).filter(Boolean))) as string[],
      projects: gdriveProjects,
      source: "cache",
    };
  }
}
