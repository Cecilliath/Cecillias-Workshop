export type FilterCategory = 'ALL' | 'MOTION VIDEO' | 'GRAPHIC DESIGN' | 'BRANDING' | 'DIGITAL ILLUSTRATION' | 'WEBTOON';

export type ProjectType = 'motion' | 'poster' | 'character' | 'webtoon' | 'apparel' | 'digital' | 'uiux';

export interface WebtoonEpisode {
  episodeNumber: string;
  title: string;
  subtitle?: string;
  panels: string[];
  isTeaser?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<FilterCategory, 'ALL'>;
  year: string;
  type: ProjectType;
  thumbnail: string;
  previewVideo?: string;
  fullVideo?: string;
  youtubeId?: string;
  description: string;
  role: string;
  tools: string[];
  driveUrl?: string;
  pdfUrl?: string;
  additionalImages?: string[];
  episodes?: WebtoonEpisode[];
  isFeatured?: boolean;
  gridSpan?: 'full' | 'wide' | 'tall' | 'normal';
  aspectRatio?: '16/9' | '3/4' | '4/5' | '9/16' | '1/1' | '2/3';
}

export const filterCategories: FilterCategory[] = [
  'ALL',
  'MOTION VIDEO',
  'GRAPHIC DESIGN',
  'BRANDING',
  'DIGITAL ILLUSTRATION',
  'WEBTOON',
];

export const projectsData: ProjectItem[] = [
  // ─── MOTION GRAPHICS & VIDEO ───
  {
    id: '1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB',
    title: 'Motion CV & Visual Reel',
    category: 'MOTION VIDEO',
    year: '2025',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB=w1000',
    previewVideo: '/videos/motion-cv-preview.mp4',
    youtubeId: 'Fc7l53q-vvc',
    description: 'An animated visual resume showcasing creative direction, motion graphics, kinetic typography, and multidisciplinary design expertise.',
    role: 'Motion Designer & Animator',
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    driveUrl: 'https://drive.google.com/file/d/1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB/view?usp=sharing',
    isFeatured: true,
    gridSpan: 'wide',
    aspectRatio: '16/9',
  },

  {
    id: '1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-',
    title: "Dove's Video Campaign Project",
    category: 'MOTION VIDEO',
    year: '2025',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/1JppZbdEG95whsO9-rASfSnij0qbVTGvl=w1000',
    previewVideo: '/videos/dove-campaign-preview.mp4',
    youtubeId: 'XOsQivDEJeI',
    description: 'A 2D animated commercial campaign video focusing on soft visual storytelling, gentle color palettes, and emotional brand connection.',
    role: '2D Animator & Storyboard Artist',
    tools: ['After Effects', 'Photoshop', 'Procreate'],
    driveUrl: 'https://drive.google.com/file/d/1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '16/9',
  },
  {
    id: '13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn',
    title: 'SDGs Motion Effect',
    category: 'MOTION VIDEO',
    year: '2025',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn=w1000',
    previewVideo: '/videos/sdgs-motion-preview.mp4',
    youtubeId: 'DZkaGCIFxWI',
    description: 'An educational motion graphics piece explaining Sustainable Development Goals through clean icon transitions and dynamic motion design.',
    role: 'Motion Graphics Designer',
    tools: ['After Effects', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '16/9',
  },
  {
    id: '1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2',
    title: 'Traveloka Commercial Ad',
    category: 'MOTION VIDEO',
    year: '2024',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2=w1000',
    previewVideo: '/videos/traveloka-ad-preview.mp4',
    youtubeId: 'BeiqzeqE6iY',
    description: 'A commercial advertisement motion design featuring fluid vector animations, vibrant travel themes, and promotional typography.',
    role: 'Motion Designer & Compositor',
    tools: ['After Effects', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '9/16',
  },

  // ─── WEBTOON DIGITAL COMIC ───
  {
    id: 'webtoon-harta-arwah-penuntun',
    title: 'Harta Arwah Penuntun',
    category: 'WEBTOON',
    year: '2024',
    type: 'webtoon',
    thumbnail: '/webtoon/ep1-scene1.jpg',
    description: 'An original 5-episode Indonesian digital webtoon comic exploring dark folklore, supernatural mystery, and atmospheric visual storytelling.',
    role: 'Comic Artist, Illustrator & Storywriter',
    tools: ['Procreate', 'Photoshop', 'Clip Studio Paint'],
    driveUrl: 'https://drive.google.com/drive/folders/10ThtT0MwcQ9c03X6KQjd-tDs1oMwR-sl',
    gridSpan: 'normal',
    aspectRatio: '3/4',
    episodes: [
      {
        episodeNumber: '01',
        title: 'Episode 01 — Pertemuan Pertama',
        subtitle: 'A quiet night turns uncanny when an ancient compass reveals unseen spirits.',
        panels: [
          '/webtoon/ep1-scene1.jpg',
          '/webtoon/ep1-scene2.jpg',
          '/webtoon/ep1-scene3.jpg',
          '/webtoon/ep1-scene4.jpg',
          '/webtoon/ep1-scene5.jpg',
          '/webtoon/ep1-scene6.jpg',
          '/webtoon/ep1-scene7.jpg',
        ],
      },
      {
        episodeNumber: '02',
        title: 'Episode 02 — Jejak di Kegelapan',
        subtitle: 'Following the spirit guide deep into the forgotten forest.',
        panels: [
          '/webtoon/ep2-scene1.jpg',
          '/webtoon/ep2-scene2.jpg',
          '/webtoon/ep2-scene3.jpg',
          '/webtoon/ep2-scene4.jpg',
          '/webtoon/ep2-scene5.jpg',
          '/webtoon/ep2-scene6.jpg',
          '/webtoon/ep2-scene7.jpg',
        ],
      },
      {
        episodeNumber: '03',
        title: 'Episode 03 — Bisikan Leluhur',
        subtitle: 'Uncovering the lost scroll of the ancestral village.',
        panels: [
          '/webtoon/ep3-scene1.jpg',
        ],
      },
      {
        episodeNumber: '04',
        title: 'Episode 04 — Gerbang Bayangan',
        subtitle: 'The threshold between realms begins to collapse.',
        panels: [],
        isTeaser: true,
      },
      {
        episodeNumber: '05',
        title: 'Episode 05 — Rahasia Terakhir',
        subtitle: 'The climactic resolution of the spirit artifact.',
        panels: [],
        isTeaser: true,
      },
    ],
  },

  // ─── GRAPHIC DESIGN ───
  {
    id: '1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz',
    title: 'Diversity Is Our Strength',
    category: 'GRAPHIC DESIGN',
    year: '2025',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz=w1000',
    description: 'A striking social awareness poster celebrating cultural diversity through modern typographic alignment and expressive graphic composition.',
    role: 'Graphic & Poster Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '3/4',
  },
  {
    id: '1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o',
    title: 'Internet Rumah Gak Ribet',
    category: 'GRAPHIC DESIGN',
    year: '2025',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o=w1000',
    description: 'A promotional advertising poster design engineered for clear message hierarchy, vibrant brand tones, and high-impact visual appeal.',
    role: 'Poster & Visual Designer',
    tools: ['Photoshop', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '3/4',
  },
  {
    id: '1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD',
    title: 'Yoghurt Series Campaign',
    category: 'GRAPHIC DESIGN',
    year: '2024',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD=w1000',
    description: 'A fresh, pastel-toned promotional poster series created for a beverage product launch highlighting natural ingredients and playful typography.',
    role: 'Brand & Editorial Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '3/4',
  },
  {
    id: '1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2',
    title: 'Event Exhibition Banner Visual',
    category: 'GRAPHIC DESIGN',
    year: '2024',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2=w1000',
    description: 'Large-format event banner graphic designed for high visibility, balanced compositional spacing, and cohesive event branding.',
    role: 'Banner & Event Graphic Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2/view?usp=sharing',
    gridSpan: 'wide',
    aspectRatio: '16/9',
  },

  // ─── BRANDING ───
  {
    id: '18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa',
    title: 'Brand Identity & Logo Construction',
    category: 'BRANDING',
    year: '2024',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa=w1000',
    description: 'A comprehensive logo mark and visual identity exploration focusing on clean geometry, memorable mark construction, and versatile scaling.',
    role: 'Logo & Identity Designer',
    tools: ['Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '3/4',
  },
  {
    id: '1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY',
    title: 'T-Shirt Graphic & Apparel Mockup',
    category: 'BRANDING',
    year: '2025',
    type: 'apparel',
    thumbnail: 'https://lh3.googleusercontent.com/d/1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY=w1000',
    description: 'Custom streetwear graphic apparel print design presented on photorealistic garment mockups for production and retail presentation.',
    role: 'Apparel & Graphic Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },

  // ─── DIGITAL ILLUSTRATION ───
  {
    id: '18pYlW092tE7JPDU1ghytlYRwB6K8avRl',
    title: 'Crebo Mascot Character Design',
    category: 'DIGITAL ILLUSTRATION',
    year: '2025',
    type: 'character',
    thumbnail: 'https://lh3.googleusercontent.com/d/18pYlW092tE7JPDU1ghytlYRwB6K8avRl=w1000',
    description: 'Original character mascot design created for campus creative exhibition events, featuring custom digital brushwork, expressions, and poses.',
    role: 'Character Designer & Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/18pYlW092tE7JPDU1ghytlYRwB6K8avRl/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
    additionalImages: [
      'https://lh3.googleusercontent.com/d/11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp=w1000',
    ],
  },
  {
    id: '11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp',
    title: 'Lia & Crebo Character Model Sheet',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'character',
    thumbnail: 'https://lh3.googleusercontent.com/d/11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp=w1000',
    description: 'Detailed character turnarounds and costume concept art created for digital media storytelling and animation pre-production.',
    role: 'Concept Artist & Illustrator',
    tools: ['Procreate', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp/view?usp=sharing',
    gridSpan: 'wide',
    aspectRatio: '16/9',
  },
  {
    id: '1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp',
    title: 'Packaging Illustration Design',
    category: 'DIGITAL ILLUSTRATION',
    year: '2025',
    type: 'digital',
    thumbnail: 'https://lh3.googleusercontent.com/d/1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp=w1000',
    description: 'Custom illustrated product packaging combining bespoke digital artwork, decorative layout borders, and print-ready vector graphics.',
    role: 'Packaging & Digital Illustrator',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
  {
    id: '1ABPX1HfH_1N_MJlA1Mmisi4z7QQwasWY',
    title: 'Digital Concept Art — Portrait Study',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'digital',
    thumbnail: '/illustrations/digital-illustration-1.jpg',
    description: 'A digital portrait illustration exploring lighting, atmospheric colors, and expressive character brushwork.',
    role: 'Digital Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1ABPX1HfH_1N_MJlA1Mmisi4z7QQwasWY/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
  {
    id: '1ENMCyWYMDLae9Lo7XhAbYsCEjlb24sJD',
    title: 'Digital Concept Art — Character Study I',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'digital',
    thumbnail: '/illustrations/digital-illustration-2.jpg',
    description: 'Stylized digital artwork examining soft ambient shading, tonal contrast, and fine character line art.',
    role: 'Digital Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1ENMCyWYMDLae9Lo7XhAbYsCEjlb24sJD/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
  {
    id: '1OVDt4GBSaQmhmULF7CjMPDi_UfBkmu_v',
    title: 'Digital Concept Art — Character Study II',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'digital',
    thumbnail: '/illustrations/digital-illustration-3.jpg',
    description: 'An expressive digital painting focusing on mood, texture rendering, and character pose composition.',
    role: 'Digital Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1OVDt4GBSaQmhmULF7CjMPDi_UfBkmu_v/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
  {
    id: '1ZMO2KQZwBfvgbMGFjVq314mvxJ8PY95z',
    title: 'Digital Concept Art — Fantasy Portrait',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'digital',
    thumbnail: '/illustrations/digital-illustration-4.jpg',
    description: 'Digital illustration study exploring vivid palette accents, character costume details, and painterly finish.',
    role: 'Digital Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1ZMO2KQZwBfvgbMGFjVq314mvxJ8PY95z/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
  {
    id: '1nASDEnovk3lwSV7AvYOKSi3yH_dzVm6h',
    title: 'Digital Concept Art — Expression Study',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'digital',
    thumbnail: '/illustrations/digital-illustration-5.jpg',
    description: 'Digital painting focusing on warm highlight blending, subtle expression rendering, and focal contrast.',
    role: 'Digital Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1nASDEnovk3lwSV7AvYOKSi3yH_dzVm6h/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
  {
    id: '1TzLgI-HmV4Jr8AbabiuAcER8pL6lmCun',
    title: 'Digital Concept Art — Atmospheric Painting',
    category: 'DIGITAL ILLUSTRATION',
    year: '2024',
    type: 'digital',
    thumbnail: '/illustrations/digital-illustration-6.jpg',
    description: 'Detailed character illustration exploring atmospheric depth, rim lighting, and digital texture work.',
    role: 'Digital Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1TzLgI-HmV4Jr8AbabiuAcER8pL6lmCun/view?usp=sharing',
    gridSpan: 'normal',
    aspectRatio: '4/5',
  },
];

