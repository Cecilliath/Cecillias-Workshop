import fs from 'fs';
import path from 'path';

const webtoonFiles = [
  { id: '1ZOP45POC4MBJJii-ZLqcHmUjROmD9eWU', episode: 1, scene: 1, name: 'ep1-scene1.jpg' },
  { id: '17c7kr7anDjNeWNgabCOFjASifO_7vJsj', episode: 1, scene: 2, name: 'ep1-scene2.jpg' },
  { id: '1qaj5Md0eO8EduRgvNVCseogQ6coSGlK7', episode: 1, scene: 3, name: 'ep1-scene3.jpg' },
  { id: '1_XX-zU8ZDyRxNI2w-5Qz2Ic4XdYSMN_h', episode: 1, scene: 4, name: 'ep1-scene4.jpg' },
  { id: '1jO54CEyEiGAg7S5KCeS_vXk6uzc4qLMV', episode: 1, scene: 5, name: 'ep1-scene5.jpg' },
  { id: '1kjbG8_XLX1WjpE7HZx6Ri5CaOtoTORVM', episode: 1, scene: 6, name: 'ep1-scene6.jpg' },
  { id: '1Kp0wzk5Bs_XFRWVZGe6Kj5pOGqt0nyT1', episode: 1, scene: 7, name: 'ep1-scene7.jpg' },

  { id: '1LSpc7id1R5oK_GVSTOASlJA2doq7KvFA', episode: 2, scene: 1, name: 'ep2-scene1.jpg' },
  { id: '1ZdQDXqUkB5d3JTQlM-qK40M_vwa_z3ew', episode: 2, scene: 2, name: 'ep2-scene2.jpg' },
  { id: '1VTuj2tRMobnb9byLd2Ks0N21cjJVsE57', episode: 2, scene: 3, name: 'ep2-scene3.jpg' },
  { id: '1hbjg5bFVGA8Hz6hSB8_MnWutHeRCatDr', episode: 2, scene: 4, name: 'ep2-scene4.jpg' },
  { id: '1tIT09ocJhphxi2Kswq2jvDewv75ApcQ9', episode: 2, scene: 5, name: 'ep2-scene5.jpg' },
  { id: '1_3Rlz8Wou8fOV-pmzU14Qd1D-z8JaM9P', episode: 2, scene: 6, name: 'ep2-scene6.jpg' },
  { id: '1_e0ErEJrhNQ73CJmqxyc3zPiUwhTda21', episode: 2, scene: 7, name: 'ep2-scene7.jpg' },

  { id: '1pYvLoM2mdxl03jTJjqx6NhdSgxKzxcow', episode: 3, scene: 1, name: 'ep3-scene1.jpg' },
];

const targetDir = path.resolve('public/webtoon');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadFile(item) {
  const filePath = path.join(targetDir, item.name);
  console.log(`Downloading Webtoon ${item.name}...`);
  const url = `https://lh3.googleusercontent.com/d/${item.id}=w1600`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log(`✅ Saved ${item.name} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } else {
      console.error(`❌ HTTP ${res.status} for ${item.name}`);
    }
  } catch (err) {
    console.error(`❌ Failed ${item.name}:`, err);
  }
}

async function main() {
  for (const item of webtoonFiles) {
    await downloadFile(item);
  }
  console.log('Finished downloading webtoon files!');
}

main();
