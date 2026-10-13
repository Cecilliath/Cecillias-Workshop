import fs from 'fs';

async function main() {
  const webtoonFolderId = '10ThtT0MwcQ9c03X6KQjd-tDs1oMwR-sl';
  const url = `https://drive.google.com/drive/folders/${webtoonFolderId}`;
  const res = await fetch(url);
  const html = await res.text();

  // Search for subfolders or folder mimeTypes
  const subfolderMatches = [...html.matchAll(/\[\[\[null,"([a-zA-Z0-9_-]{25,45})"\](?:,[^,\[\]]*)*?,"application\/vnd\.google-apps\.folder"(?:,[^\[\]]*)*?\[\[\["([^"]+)"/g)];
  console.log('Subfolders in Webtoon folder:', subfolderMatches.map(m => ({ id: m[1], name: m[2] })));

  // Let's also check for all strings of length 33 that look like file IDs
  const allIds = [...html.matchAll(/"([a-zA-Z0-9_-]{33})"/g)].map(m => m[1]);
  const uniqueIds = Array.from(new Set(allIds)).filter(id => id !== webtoonFolderId);
  console.log(`Found ${uniqueIds.length} unique 33-char Google Drive IDs:`);
  console.log(uniqueIds);
}

main();
