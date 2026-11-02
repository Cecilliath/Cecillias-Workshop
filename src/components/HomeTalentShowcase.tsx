import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import {
  hardSkills,
  softwareSkills,
  softSkills,
  languages,
  type SkillItem,
} from "../data/skillsData";
import { ScrollReveal, AnimatedCounter } from "./ScrollReveal";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "3.89", label: "GPA" },
  { value: "2+", label: "Years active" },
];

const recruiterHighlights = [
  "B.A. Desain Komunikasi Visual · Universitas Tarumanagara",
  "CREBO committee · campus exhibitions & event branding",
  "Intermediate Adobe, Figma & Blender",
  "English (Fluent) · Indonesian (Native)",
];

const SkillIcon: React.FC<{ item: SkillItem; large?: boolean }> = ({ item, large }) => {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      className="flex flex-col items-center text-center gap-2 p-3 rounded-2xl hover:bg-beige/30 transition-colors"
    >
      <div
        className={`flex items-center justify-center rounded-xl ${large ? "w-14 h-14" : "w-11 h-11"}`}
        style={{
          backgroundColor: item.color ? `${item.color}20` : "rgba(232, 223, 212, 0.55)",
        }}
      >
        <Icon
          className={large ? "text-2xl" : "text-xl"}
          style={{ color: item.color ?? "#6B5344" }}
        />
      </div>
      <span className="text-xs font-medium text-charcoal leading-tight">{item.name}</span>
      {item.detail && <span className="text-[10px] text-charcoal/45">{item.detail}</span>}
    </motion.div>
  );
};

export const HomeTalentShowcase: React.FC = () => {
  return (
    <div id="skills" className="mt-4 pt-12 border-t border-beige/50">
      <ScrollReveal>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-2">Skills & Capabilities</p>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-brown">
              What I bring to your team
            </h2>
          </div>
          <p className="text-sm text-charcoal/50 max-w-md lg:text-right">
            Visual communication focused on brand, motion, and digital — ready for internships
            and creative collaborations.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-8 space-y-6">
          <ScrollReveal delay={0.05}>
            <div className="card-soft p-6 md:p-8">
              <h3 className="text-xs uppercase tracking-widest text-brown font-medium mb-5">
                Software
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {softwareSkills.map((s) => (
                  <SkillIcon key={s.name} item={s} large />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card-soft p-6 md:p-8">
              <h3 className="text-xs uppercase tracking-widest text-brown font-medium mb-5">
                Hard Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {hardSkills.map((s) => (
                  <SkillIcon key={s.name} item={s} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="card-soft p-6 md:p-8">
              <h3 className="text-xs uppercase tracking-widest text-brown font-medium mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s.name}
                    className="text-xs px-3 py-2 rounded-xl bg-beige/40 text-charcoal/70 border border-beige/50"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <ScrollReveal delay={0.08} direction="right">
            <div className="card-soft p-6 md:p-7 bg-gradient-to-br from-soft-white to-beige/20">
              <p className="section-label mb-4">At a glance</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl text-brown font-medium">
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="text-[10px] text-charcoal/45 uppercase tracking-wide mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2.5 mb-6">
                {recruiterHighlights.map((line) => (
                  <li key={line} className="text-xs text-charcoal/60 leading-relaxed flex gap-2">
                    <span className="text-blush-dark mt-0.5">·</span>
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 text-sm font-medium text-brown hover:text-brown-light transition-colors"
              >
                View certifications
                <FiArrowUpRight />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} direction="right">
            <div className="card-soft p-6">
              <h3 className="text-xs uppercase tracking-widest text-brown font-medium mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => {
                  const flags: Record<string, string> = {
                    English: "🇬🇧",
                    Indonesian: "🇮🇩",
                    Mandarin: "🇨🇳",
                  };
                  return (
                    <div key={lang.name} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-charcoal">
                        <span>{flags[lang.name]}</span>
                        {lang.name}
                      </span>
                      <span className="text-xs text-charcoal/45">{lang.detail}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
