import fs from 'fs';
import path from 'path';

const illustrations = [
  { id: '1ABPX1HfH_1N_MJlA1Mmisi4z7QQwasWY', filename: 'digital-illustration-1.jpg' },
  { id: '1ENMCyWYMDLae9Lo7XhAbYsCEjlb24sJD', filename: 'digital-illustration-2.jpg' },
  { id: '1OVDt4GBSaQmhmULF7CjMPDi_UfBkmu_v', filename: 'digital-illustration-3.jpg' },
  { id: '1ZMO2KQZwBfvgbMGFjVq314mvxJ8PY95z', filename: 'digital-illustration-4.jpg' },
  { id: '1nASDEnovk3lwSV7AvYOKSi3yH_dzVm6h', filename: 'digital-illustration-5.jpg' },
  { id: '1TzLgI-HmV4Jr8AbabiuAcER8pL6lmCun', filename: 'digital-illustration-6.jpg' },
];

const targetDir = path.resolve('public/illustrations');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadIllustrations() {
  for (const item of illustrations) {
    const filePath = path.join(targetDir, item.filename);
    const url = `https://lh3.googleusercontent.com/d/${item.id}=w2000`;
    console.log(`Downloading ${item.filename} from ${url}...`);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(buffer));
      console.log(`Saved ${item.filename} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Failed to download ${item.filename}:`, err);
    }
  }
}

downloadIllustrations().catch(console.error);
