import fs from 'fs';
import path from 'path';

const videos = [
  { id: '1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB', filename: 'motion-cv.mp4', name: 'Motion CV' },
  { id: '1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-', filename: 'dove-campaign.mp4', name: 'Dove Campaign' },
  { id: '13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn', filename: 'sdgs-motion.mp4', name: 'SDGs Motion' },
  { id: '1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2', filename: 'traveloka-ad.mp4', name: 'Traveloka Ad' },
];

const targetDir = path.resolve('public/videos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadVideo(video) {
  const filePath = path.join(targetDir, video.filename);
  console.log(`\n⏳ Downloading ${video.name} (${video.id}) to ${filePath}...`);
  const url = `https://drive.usercontent.google.com/download?id=${video.id}&export=download`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`❌ Failed HTTP status ${res.status} for ${video.name}`);
      return;
    }
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Saved ${video.filename} (${(buffer.length / (1024 * 1024)).toFixed(2)} MB)`);
  } catch (err) {
    console.error(`❌ Error downloading ${video.name}:`, err);
  }
}

async function main() {
  for (const v of videos) {
    await downloadVideo(v);
  }
  console.log('\n🎉 Finished downloading all motion videos!');
}

main();
