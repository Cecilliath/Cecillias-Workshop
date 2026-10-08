import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const ffmpegPath = ffmpegInstaller.path;
const sourcePath = 'C:/Users/Cecillia/Downloads/Traveloka Advertisement.mp4';
const outputPath = path.resolve('public/videos/traveloka-ad-preview.mp4');

console.log(`Checking source: ${sourcePath}`);

if (!fs.existsSync(sourcePath)) {
  console.error(`❌ Source video not found at ${sourcePath}`);
  process.exit(1);
}

// Probe duration using ffmpeg
let output = '';
try {
  execSync(`"${ffmpegPath}" -i "${sourcePath}"`, { stdio: 'pipe' });
} catch (err) {
  output = err.stderr ? err.stderr.toString() : err.message;
}

const match = output.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
if (!match) {
  console.error('❌ Could not determine video duration');
  process.exit(1);
}

const hours = parseFloat(match[1]);
const minutes = parseFloat(match[2]);
const seconds = parseFloat(match[3]);
const totalDuration = hours * 3600 + minutes * 60 + seconds;

console.log(`Total Duration: ${totalDuration} seconds (${match[0]})`);

const endStart = Math.max(0, totalDuration - 5);
console.log(`First 5 seconds: 0 -> 5`);
console.log(`Last 5 seconds: ${endStart} -> ${totalDuration}`);

// Generate filter_complex command: trim 0->5, trim endStart->totalDuration, concat, scale to 720p vertical
const filterStr = `[0:v]trim=start=0:end=5,setpts=PTS-STARTPTS[v1]; [0:v]trim=start=${endStart}:end=${totalDuration},setpts=PTS-STARTPTS[v2]; [v1][v2]concat=n=2:v=1:a=0,scale=-2:720[outv]`;
const cmd = `"${ffmpegPath}" -i "${sourcePath}" -filter_complex "${filterStr}" -map "[outv]" -an -c:v libx264 -pix_fmt yuv420p -b:v 1500k -y "${outputPath}"`;

console.log(`\nExecuting FFmpeg command...`);
try {
  execSync(cmd, { stdio: 'inherit' });
  const stats = fs.statSync(outputPath);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 SUCCESS! Created Traveloka preview (first 5s + last 5s): ${outputPath} (${sizeMb} MB)`);
} catch (err) {
  console.error(`❌ Error creating preview:`, err);
}
