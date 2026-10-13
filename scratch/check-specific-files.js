import fs from 'fs';
import path from 'path';

const downloadsDir = path.resolve('../..');

const checkFiles = [
  '1000245470.png',
  '1000240503.png',
  '1000245469.png',
  '1000245471.png',
  '1000279097.jpg',
  'WhatsApp Image 2026-10-12 at 14.10.16.jpeg',
  'IMG-20251011-WA0034 (3).jpg',
  'LOGO.png',
  'LOGO (1).png',
  'UTS_Kelompok 10_Sloosh! (PPT).jpg',
  'YOGHURT SERIES.png',
  'YOGHURT SERIES (2).png',
  'Internet Rumah Gak Ribet, Langsung Nyala.png',
  'Banner.png',
  'Traveloka.jpg'
];

for (const f of checkFiles) {
  const p = path.join(downloadsDir, f);
  if (fs.existsSync(p)) {
    const s = fs.statSync(p);
    console.log(`${f}: ${(s.size / 1024).toFixed(1)} KB, mtime: ${s.mtime.toISOString()}`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
}
