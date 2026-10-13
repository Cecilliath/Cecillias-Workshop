import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const ffmpegPath = ffmpegInstaller.path;

const pairs = [
  {
    input: 'public/videos/motion-cv.mp4',
    output: 'public/videos/motion-cv-preview.mp4',
    name: 'Motion CV Preview',
  },
  {
    input: 'public/videos/dove-campaign.mp4',
    output: 'public/videos/dove-campaign-preview.mp4',
    name: 'Dove Campaign Preview',
  },
  {
    input: 'public/videos/sdgs-motion.mp4',
    output: 'public/videos/sdgs-motion-preview.mp4',
    name: 'SDGs Motion Preview',
  },
  {
    input: 'public/videos/traveloka-ad.mp4',
    output: 'public/videos/traveloka-ad-preview.mp4',
    name: 'Traveloka Ad Preview',
  },
];

function processPreview(p) {
  const inputPath = path.resolve(p.input);
  const outputPath = path.resolve(p.output);

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Source missing: ${inputPath}`);
    return;
  }

  console.log(`\n⏳ Trimming 0:00 -> 0:10 for ${p.name}...`);
  console.log(`   Source: ${p.input} -> Preview: ${p.output}`);

  // FFmpeg command starting at 0:00, 10s duration, 720p max, no audio, H.264
  const cmd = `"${ffmpegPath}" -ss 00:00:00 -i "${inputPath}" -t 10 -an -vf "scale=-2:720" -c:v libx264 -pix_fmt yuv420p -b:v 1500k -y "${outputPath}"`;

  try {
    execSync(cmd, { stdio: 'inherit' });
    const stats = fs.statSync(outputPath);
    const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Success! Created ${p.output} (${sizeMb} MB)`);
  } catch (err) {
    console.error(`❌ Failed processing ${p.name}:`, err);
  }
}

function main() {
  for (const p of pairs) {
    processPreview(p);
  }
  console.log('\n🎉 Finished creating all 0:00 -> 0:10 lightweight preview MP4s!');
}

main();
