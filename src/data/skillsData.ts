import type { IconType } from "react-icons";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiFigma,
  SiBlender,
} from "react-icons/si";
import {
  HiOutlinePaintBrush,
  HiOutlineSquares2X2,
  HiOutlineRectangleGroup,
  HiOutlineComputerDesktop,
  HiOutlineFilm,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineChatBubbleLeftRight,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineHeart,
  HiOutlineLanguage,
} from "react-icons/hi2";

export interface SkillItem {
  name: string;
  icon: IconType;
  detail?: string;
  color?: string;
}

export const hardSkills: SkillItem[] = [
  { name: "Digital Illustration", icon: HiOutlinePaintBrush, color: "#D4A5A5" },
  { name: "Graphic Design", icon: HiOutlineSquares2X2, color: "#8B7355" },
  { name: "Layout Design", icon: HiOutlineRectangleGroup, color: "#6B5344" },
  { name: "UI / Website Design", icon: HiOutlineComputerDesktop, color: "#C9A89A" },
  { name: "Video Editing", icon: HiOutlineFilm, color: "#A08070" },
];

export const softwareSkills: SkillItem[] = [
  {
    name: "Illustrator",
    icon: SiAdobeillustrator,
    detail: "Intermediate",
    color: "#FF9A00",
  },
  {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    detail: "Intermediate",
    color: "#31A8FF",
  },
  {
    name: "After Effects",
    icon: SiAdobeaftereffects,
    detail: "Intermediate",
    color: "#9999FF",
  },
  {
    name: "Figma",
    icon: SiFigma,
    detail: "Website Design",
    color: "#F24E1E",
  },
  {
    name: "Blender",
    icon: SiBlender,
    detail: "3D Design",
    color: "#E87D0D",
  },
];

export const softSkills: SkillItem[] = [
  { name: "Leadership", icon: HiOutlineStar },
  { name: "Teamwork", icon: HiOutlineUserGroup },
  { name: "Communication", icon: HiOutlineChatBubbleLeftRight },
  { name: "Creativity", icon: HiOutlineLightBulb },
  { name: "Analytical Thinking", icon: HiOutlineChartBar },
  { name: "Critical Thinking", icon: HiOutlineMagnifyingGlassCircle },
  { name: "Emotional Intelligence", icon: HiOutlineHeart },
];

export const languages: SkillItem[] = [
  { name: "English", icon: HiOutlineLanguage, detail: "Fluent" },
  { name: "Indonesian", icon: HiOutlineLanguage, detail: "Native" },
  { name: "Mandarin", icon: HiOutlineLanguage, detail: "Passive" },
];
