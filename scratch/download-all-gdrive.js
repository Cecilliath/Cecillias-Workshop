import fs from 'fs';
import path from 'path';

const outDir = path.resolve('scratch/gdrive');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const items = [
  // Branding
  { id: '1njm0-zlJf5jnyldvpTtFNHCGngHp7B_c', name: 'parfum_cover_from_drive.png' },
  { id: '1aH2V3NpWBPqI9gDI_kH5K5okkUC703W-', name: 'perfume_branding.pdf', isPdf: true },
  { id: '1TYFdb6SK10F4QEaBFSX1eE_oz-w3FPQC', name: 'sloosh_proposal.pdf', isPdf: true },
  
  // Designs
  { id: '18pYlW092tE7JPDU1ghytlYRwB6K8avRl', name: 'crebo_char_1.png' },
  { id: '11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp', name: 'crebo_char_2.png' },
  { id: '1MrgWIuS5vC5M8pFVFFuMRo2hNOoQQi7X', name: 'logo_design_drive.png' },
  { id: '1fku6BkXNn8XGLJRa2lArxGXhvowm4gvU', name: 'packaging_illustration_1.jpg' },
  { id: '1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp', name: 'packaging_illustration_2.png' },
  { id: '1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY', name: 'tshirt_design.png' },
  { id: '1PS6oVjI9b_-_oaOLQWORBvFoPFR59aGi', name: 'tshirt_mockup.jpg' },

  // UI UX
  { id: '1uzkPibOPWN8LzXVqp6aunpz-UI4VH5e2', name: 'uiux_homepage.png' },
  { id: '1taAf_dDxP8W-bszWvJOr1qsWfZpyJN0f', name: 'uiux_biodata.png' },
  { id: '1ShdMw2exEkAehSopz-pcS2y0iOou9rQ6', name: 'uiux_status_perkuliahan.png' },
  { id: '1eGMI_GCGt-8ZfDoiAqPAIk7dCl32tYs0', name: 'uiux_garis3.png' },

  // Posters
  { id: '1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2', name: 'poster_banner.png' },
  { id: '1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz', name: 'poster_diversity.png' },
  { id: '1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o', name: 'poster_internet_rumah.png' },
  { id: '18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa', name: 'poster_logo.png' },
  { id: '1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD', name: 'poster_yoghurt.png' },

  // Motion Thumbnails
  { id: '1JppZbdEG95whsO9-rASfSnij0qbVTGvl', name: 'thumb_dove.jpg' },
  { id: '1KLJW_aeeBcR7RRbE0hulFhDNxHFftmix', name: 'thumb_sdg.png' },
  { id: '15Douf4qsWxtJkQF-v7sHYt9JPLpnA-dc', name: 'thumb_traveloka.png' },
];

async function downloadFile(item) {
  const dest = path.join(outDir, item.name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`Already exists: ${item.name}`);
    return;
  }
  
  // Try direct download URL first
  let urls = [];
  if (item.isPdf) {
    urls.push(`https://drive.google.com/uc?export=download&id=${item.id}`);
  } else {
    urls.push(`https://lh3.googleusercontent.com/d/${item.id}=w2500`);
    urls.push(`https://drive.google.com/thumbnail?id=${item.id}&sz=w2000`);
    urls.push(`https://drive.google.com/uc?export=download&id=${item.id}`);
  }

  for (const url of urls) {
    try {
      console.log(`Fetching ${item.name} from ${url.slice(0, 50)}...`);
      const res = await fetch(url);
      if (res.ok) {
        const ct = res.headers.get('content-type') || '';
        // If html page returned instead of binary, skip
        if (ct.includes('text/html') && !item.isPdf) {
          console.log(`Received HTML for ${item.name}, trying next url...`);
          continue;
        }
        const buf = await res.arrayBuffer();
        if (buf.byteLength > 1000) {
          fs.writeFileSync(dest, Buffer.from(buf));
          console.log(`✅ Saved ${item.name} (${(buf.byteLength / 1024).toFixed(1)} KB)`);
          return;
        }
      }
    } catch (e) {
      console.error(`Error downloading ${item.name}: ${e.message}`);
    }
  }
  console.log(`❌ Failed to download ${item.name}`);
}

async function run() {
  for (const it of items) {
    await downloadFile(it);
  }
}

run();
