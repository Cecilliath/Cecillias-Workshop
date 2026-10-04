export type ProjectCategory = 'ALL' | 'MOTION' | 'POSTER DESIGN' | 'ILLUSTRATION & DIGITAL' | 'APPAREL';

export type ProjectType = 'motion' | 'poster' | 'character' | 'webtoon' | 'apparel' | 'digital';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  year: string;
  type: ProjectType;
  thumbnail: string;
  previewVideo?: string;
  fullVideo?: string;
  description: string;
  role: string;
  tools: string[];
  driveUrl?: string;
  pdfUrl?: string;
  additionalImages?: string[];
  isFeatured?: boolean;
}

export const filterCategories: ProjectCategory[] = [
  'ALL',
  'MOTION',
  'POSTER DESIGN',
  'ILLUSTRATION & DIGITAL',
  'APPAREL',
];

export const projectsData: ProjectItem[] = [
  // ─── FEATURED MOTION CV ───
  {
    id: '1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB',
    title: 'Motion CV',
    category: 'MOTION',
    year: '2025',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB=w1000',
    previewVideo: 'https://drive.usercontent.google.com/download?id=1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB&export=download',
    fullVideo: 'https://drive.google.com/file/d/1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB/preview',
    description: 'An animated visual resume showcasing creative direction, motion graphics, kinetic typography, and multidisciplinary design expertise.',
    role: 'Motion Designer & Animator',
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    driveUrl: 'https://drive.google.com/file/d/1ztLLmKSNEMbyUXDvbPt547zSwMCv4GpB/view?usp=sharing',
    isFeatured: true,
  },

  // ─── OTHER MOTION PROJECTS ───
  {
    id: '1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-',
    title: "Dove's Video Campaign Project",
    category: 'MOTION',
    year: '2025',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-=w1000',
    previewVideo: 'https://drive.usercontent.google.com/download?id=1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-&export=download',
    fullVideo: 'https://drive.google.com/file/d/1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-/preview',
    description: 'A 2D animated commercial campaign video focusing on soft visual storytelling, gentle color palettes, and emotional brand connection.',
    role: '2D Animator & Storyboard Artist',
    tools: ['After Effects', 'Photoshop', 'Procreate'],
    driveUrl: 'https://drive.google.com/file/d/1Ms3yyqZUS_WK7SyfJLkkmf7p5RuIoWa-/view?usp=sharing',
  },
  {
    id: '13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn',
    title: 'SDGs Motion Effect',
    category: 'MOTION',
    year: '2025',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn=w1000',
    previewVideo: 'https://drive.usercontent.google.com/download?id=13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn&export=download',
    fullVideo: 'https://drive.google.com/file/d/13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn/preview',
    description: 'An educational motion graphics piece explaining Sustainable Development Goals through clean icon transitions and dynamic motion design.',
    role: 'Motion Graphics Designer',
    tools: ['After Effects', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/13hEFnfS8c25WMOhtBvwVXz5bG4EupQpn/view?usp=sharing',
  },
  {
    id: '1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2',
    title: 'Traveloka Advertisement',
    category: 'MOTION',
    year: '2024',
    type: 'motion',
    thumbnail: 'https://lh3.googleusercontent.com/d/1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2=w1000',
    previewVideo: 'https://drive.usercontent.google.com/download?id=1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2&export=download',
    fullVideo: 'https://drive.google.com/file/d/1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2/preview',
    description: 'A commercial advertisement motion design featuring fluid vector animations, vibrant travel themes, and promotional typography.',
    role: 'Motion Designer & Compositor',
    tools: ['After Effects', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/1NaHd5zr5TYA0w191-YH4AMhtM8ccXwF2/view?usp=sharing',
  },

  // ─── POSTER DESIGN ───
  {
    id: '1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz',
    title: 'Diversity Is Our Strength',
    category: 'POSTER DESIGN',
    year: '2025',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz=w1000',
    description: 'A striking social awareness poster celebrating cultural diversity through modern typographic alignment and expressive graphic composition.',
    role: 'Graphic & Poster Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1Vtp-H-gGiUujHlt6AV03nFRimaTKbWJz/view?usp=sharing',
  },
  {
    id: '1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o',
    title: 'Internet Rumah Gak Ribet',
    category: 'POSTER DESIGN',
    year: '2025',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o=w1000',
    description: 'A promotional advertising poster design engineered for clear message hierarchy, vibrant brand tones, and high-impact visual appeal.',
    role: 'Poster & Visual Designer',
    tools: ['Photoshop', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/1XUhtLd063Lq7I2aTwtusoTG8rdpgfI4o/view?usp=sharing',
  },
  {
    id: '1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD',
    title: 'Yoghurt Series Campaign',
    category: 'POSTER DESIGN',
    year: '2024',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD=w1000',
    description: 'A fresh, pastel-toned promotional poster series created for a beverage product launch highlighting natural ingredients and playful typography.',
    role: 'Brand & Editorial Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1ZgT8mdwfyqb666ufE3nkqs-Wtw2GEQsD/view?usp=sharing',
  },
  {
    id: '18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa',
    title: 'Brand Identity & Logo Design',
    category: 'POSTER DESIGN',
    year: '2024',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa=w1000',
    description: 'A comprehensive logo mark and visual identity exploration focusing on clean geometry, memorable mark construction, and versatile scaling.',
    role: 'Logo & Identity Designer',
    tools: ['Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/18ewR9Tof5LpDseCkzhpHVXhJmPB_quDa/view?usp=sharing',
  },
  {
    id: '1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2',
    title: 'Event Banner Visual',
    category: 'POSTER DESIGN',
    year: '2024',
    type: 'poster',
    thumbnail: 'https://lh3.googleusercontent.com/d/1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2=w1000',
    description: 'Large-format event banner graphic designed for high visibility, balanced compositional spacing, and cohesive event branding.',
    role: 'Banner & Event Graphic Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1NZg260mA08QAmWVYTKYOLtVZU1sfN7k2/view?usp=sharing',
  },

  // ─── ILLUSTRATION & DIGITAL ───
  {
    id: '18pYlW092tE7JPDU1ghytlYRwB6K8avRl',
    title: 'Crebo Mascot Character Design',
    category: 'ILLUSTRATION & DIGITAL',
    year: '2025',
    type: 'character',
    thumbnail: 'https://lh3.googleusercontent.com/d/18pYlW092tE7JPDU1ghytlYRwB6K8avRl=w1000',
    description: 'Original character mascot design created for campus creative exhibition events, featuring custom digital brushwork, expressions, and poses.',
    role: 'Character Designer & Illustrator',
    tools: ['Procreate', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/18pYlW092tE7JPDU1ghytlYRwB6K8avRl/view?usp=sharing',
  },
  {
    id: '11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp',
    title: 'Lia & Crebo Character Sheet',
    category: 'ILLUSTRATION & DIGITAL',
    year: '2024',
    type: 'character',
    thumbnail: 'https://lh3.googleusercontent.com/d/11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp=w1000',
    description: 'Detailed character turnarounds and costume concept art created for digital media storytelling and animation pre-production.',
    role: 'Concept Artist & Illustrator',
    tools: ['Procreate', 'Illustrator'],
    driveUrl: 'https://drive.google.com/file/d/11sPdexslEfpt9gTDQSS8VTbDdNH_M2xp/view?usp=sharing',
  },
  {
    id: '1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp',
    title: 'Packaging Illustration Design',
    category: 'ILLUSTRATION & DIGITAL',
    year: '2025',
    type: 'digital',
    thumbnail: 'https://lh3.googleusercontent.com/d/1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp=w1000',
    description: 'Custom illustrated product packaging combining bespoke digital artwork, decorative layout borders, and print-ready vector graphics.',
    role: 'Packaging & Digital Illustrator',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1zst67iA6JG0MWOg1KXSPR3iHrf8P4aRp/view?usp=sharing',
  },

  // ─── APPAREL DESIGN ───
  {
    id: '1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY',
    title: 'T-Shirt Graphic & Apparel Mockup',
    category: 'APPAREL',
    year: '2025',
    type: 'apparel',
    thumbnail: 'https://lh3.googleusercontent.com/d/1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY=w1000',
    description: 'Custom streetwear graphic apparel print design presented on photorealistic garment mockups for production and retail presentation.',
    role: 'Apparel & Graphic Designer',
    tools: ['Illustrator', 'Photoshop'],
    driveUrl: 'https://drive.google.com/file/d/1o8rNgmrNfFu9wt-zXApIjqOFR9znj3cY/view?usp=sharing',
  },
];
