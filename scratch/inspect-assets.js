import fs from 'fs';
import path from 'path';

const downloadsDir = path.resolve('../..');
console.log('Inspecting Downloads directory:', downloadsDir);

const files = fs.readdirSync(downloadsDir);
console.log(`Total items in Downloads: ${files.length}`);

// Look for image/pdf/mockup files
const interestingKeywords = [
  'elixir', 'parfum', 'sloosh', 'shirt', 't-shirt', 'mockup', 'logo', 'portal', 
  'academic', 'crebo', 'lia', 'wireframe', 'cv', '10002', 'wa', 'whatsapp', 'uts', 'uas'
];

const matches = files.filter(f => {
  const lower = f.toLowerCase();
  return interestingKeywords.some(kw => lower.includes(kw));
});

console.log('\nMatching files found:');
matches.forEach(m => {
  try {
    const stat = fs.statSync(path.join(downloadsDir, m));
    console.log(`- ${m} (${(stat.size / 1024).toFixed(1)} KB) - ${stat.mtime.toISOString()}`);
  } catch (e) {
    console.log(`- ${m} [error stating file]`);
  }
});
