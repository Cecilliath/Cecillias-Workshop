import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const ffmpegPath = ffmpegInstaller.path;

const videos = [
  {
    input: 'public/videos/motion-cv.mp4',
    outputPreview: 'public/videos/motion/motion-cv-preview.mp4',
    startTime: '00:00:03',
    duration: 10,
    name: 'Motion CV Preview',
  },
  {
    input: 'public/videos/dove-campaign.mp4',
    outputPreview: 'public/videos/motion/dove-preview.mp4',
    startTime: '00:00:05',
    duration: 10,
    name: 'Dove Campaign Preview',
  },
  {
    input: 'public/videos/sdgs-motion.mp4',
    outputPreview: 'public/videos/motion/sdgs-preview.mp4',
    startTime: '00:00:06',
    duration: 10,
    name: 'SDGs Motion Preview',
  },
  {
    input: 'public/videos/traveloka-ad.mp4',
    outputPreview: 'public/videos/motion/traveloka-preview.mp4',
    startTime: '00:00:04',
    duration: 10,
    name: 'Traveloka Ad Preview',
  },
];

const targetDir = path.resolve('public/videos/motion');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function processVideo(v) {
  const fullInputPath = path.resolve(v.input);
  const fullOutputPath = path.resolve(v.outputPreview);

  if (!fs.existsSync(fullInputPath)) {
    console.error(`❌ Source video missing: ${fullInputPath}`);
    return;
  }

  console.log(`\n⏳ Generating lightweight 10s preview for "${v.name}"...`);
  console.log(`   Source: ${v.input} (Start: ${v.startTime}) -> Target: ${v.outputPreview}`);

  // ffmpeg command:
  // -ss [startTime] -i [input] -t [duration] -an (no audio) -vf "scale=-2:720" (max 720p) -c:v libx264 -pix_fmt yuv420p -b:v 1500k -y
  const cmd = `"${ffmpegPath}" -ss ${v.startTime} -i "${fullInputPath}" -t ${v.duration} -an -vf "scale=-2:720" -c:v libx264 -pix_fmt yuv420p -b:v 1500k -y "${fullOutputPath}"`;

  try {
    execSync(cmd, { stdio: 'inherit' });
    const stats = fs.statSync(fullOutputPath);
    const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`✅ Success! ${v.outputPreview} created (${sizeMb} MB)`);
  } catch (err) {
    console.error(`❌ FFmpeg processing error for ${v.name}:`, err);
  }
}

function main() {
  for (const v of videos) {
    processVideo(v);
  }
  console.log('\n🎉 Finished creating lightweight 10-second video previews!');
}

main();
