import crebo1 from "../assets/crebo1.jpg";
import crebo2 from "../assets/crebo2.jpg";
import crebo3 from "../assets/crebo3.jpg";
import lia from "../assets/lia.jpg";
import aqros from "../assets/aqros.png";
import friday from "../assets/friday.png";
import parfumpdf from "../assets/Copy of Brief Teknis UAS Media Desain Visual Semester Genap2024-2025 (6).pdf";
import gelatopdf from "../assets/MDV- (1).pdf";

export const projectCategories = [
  "Character Design",
  "Logo Design",
  "Animation",
  "Poster Design",
  "Branding",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const artGalleryItems: {
  name: string;
  image: string;
  pdf?: string;
  category?: ProjectCategory;
}[] = [
  { name: "Crebo 1", image: crebo1, category: "Character Design" },
  { name: "Crebo 2", image: crebo2, category: "Character Design" },
  { name: "Lia", image: lia, category: "Character Design" },
  { name: "Crebo 3", image: crebo3 },
  { name: "Aqros", image: aqros, pdf: parfumpdf, category: "Branding" },
  { name: "Friday", image: friday, pdf: gelatopdf, category: "Branding" },
];
