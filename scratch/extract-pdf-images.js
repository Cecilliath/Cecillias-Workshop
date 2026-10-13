import fs from 'fs';
import path from 'path';

function extractJpegs(pdfPath, prefix) {
  if (!fs.existsSync(pdfPath)) {
    console.log(`File not found: ${pdfPath}`);
    return [];
  }
  const buf = fs.readFileSync(pdfPath);
  let count = 0;
  let pos = 0;
  const saved = [];
  while ((pos = buf.indexOf(Buffer.from([0xff, 0xd8, 0xff]), pos)) !== -1) {
    const end = buf.indexOf(Buffer.from([0xff, 0xd9]), pos);
    if (end !== -1 && end - pos > 10000) { // at least 10KB
      count++;
      const imgBuf = buf.subarray(pos, end + 2);
      const filename = `scratch/${prefix}_${count}.jpg`;
      fs.writeFileSync(filename, imgBuf);
      console.log(`Saved ${filename}: ${(imgBuf.length / 1024).toFixed(1)} KB`);
      saved.push(filename);
      pos = end + 2;
    } else {
      pos += 3;
    }
  }
  return saved;
}

console.log('--- EXTRACTING FROM PERFUME BRANDING ---');
extractJpegs('scratch/gdrive/perfume_branding.pdf', 'perfume');

console.log('\n--- EXTRACTING FROM SLOOSH PROPOSAL ---');
extractJpegs('scratch/gdrive/sloosh_proposal.pdf', 'sloosh');

console.log('\n--- EXTRACTING FROM CECLIIA DOWNLOADS PERFUME ---');
extractJpegs('../../Cecillia - Konsep Desain & Visual Merchandising Parfum_sesi 2.pptx.pdf', 'parfum_dl');

console.log('\n--- EXTRACTING FROM UTS SLOOSH ---');
extractJpegs('../../UTS_Kelompok 10_Sloosh! (PPT).pdf', 'sloosh_dl');
