import { motion } from "framer-motion";
import React from "react";
import {
  hardSkills,
  softwareSkills,
  softSkills,
  languages,
  type SkillItem,
} from "../data/skillsData";
import { ScrollReveal } from "./ScrollReveal";

const SkillCard: React.FC<{
  item: SkillItem;
  index: number;
  showDetail?: boolean;
  large?: boolean;
}> = ({ item, index, showDetail = false, large = false }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group card-soft flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-card cursor-default ${
        large ? "p-6 md:p-7" : "p-5"
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-2xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
          large ? "w-14 h-14" : "w-12 h-12"
        }`}
        style={{
          backgroundColor: item.color ? `${item.color}18` : "rgba(232, 223, 212, 0.5)",
        }}
      >
        <Icon
          className={large ? "text-3xl" : "text-2xl"}
          style={{ color: item.color ?? "#6B5344" }}
        />
      </div>
      <p className={`font-medium text-charcoal ${large ? "text-sm" : "text-xs sm:text-sm"}`}>
        {item.name}
      </p>
      {showDetail && item.detail && (
        <p className="text-[11px] text-charcoal/45 mt-1">{item.detail}</p>
      )}
    </motion.div>
  );
};

const SoftSkillPill: React.FC<{ item: SkillItem; index: number }> = ({
  item,
  index,
}) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(240, 212, 212, 0.4)" }}
      className="inline-flex items-center gap-2 px-4 py-2.5 bg-beige/35 border border-beige/60 rounded-2xl text-sm text-charcoal/75 cursor-default transition-colors"
    >
      <Icon className="text-brown-light text-base shrink-0" />
      {item.name}
    </motion.div>
  );
};

const LanguageCard: React.FC<{ item: SkillItem; index: number }> = ({
  item,
  index,
}) => {
  const Icon = item.icon;
  const flags: Record<string, string> = {
    English: "🇬🇧",
    Indonesian: "🇮🇩",
    Mandarin: "🇨🇳",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 4 }}
      className="card-soft p-5 flex items-center gap-4 hover:shadow-card transition-shadow duration-300 cursor-default"
    >
      <span className="text-2xl">{flags[item.name] ?? "🌐"}</span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-charcoal">{item.name}</p>
        <p className="text-xs text-charcoal/50">{item.detail}</p>
      </div>
      <Icon className="text-brown-light/40 text-lg shrink-0" />
    </motion.div>
  );
};

export const AboutSkills: React.FC = () => {
  return (
    <div id="skills" className="mt-20 space-y-16">
      <ScrollReveal>
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="section-label mb-3">Expertise</p>
          <h3 className="font-display text-3xl md:text-4xl font-medium text-charcoal">
            Skills & Capabilities
          </h3>
          <div className="section-divider mx-auto" />
        </div>
      </ScrollReveal>

      {/* Hard Skills */}
      <div>
        <ScrollReveal delay={0.05}>
          <h4 className="text-sm font-medium text-brown uppercase tracking-widest mb-5">
            Hard Skills
          </h4>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {hardSkills.map((skill, i) => (
            <SkillCard key={skill.name} item={skill} index={i} />
          ))}
        </div>
      </div>

      {/* Software */}
      <div>
        <ScrollReveal delay={0.05}>
          <h4 className="text-sm font-medium text-brown uppercase tracking-widest mb-2">
            Software
          </h4>
          <p className="text-xs text-charcoal/45 mb-5">
            Intermediate Adobe (Illustrator, After Effects & Photoshop) · Figma · Blender
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {softwareSkills.map((skill, i) => (
            <SkillCard key={skill.name} item={skill} index={i} showDetail large />
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <ScrollReveal delay={0.05}>
          <h4 className="text-sm font-medium text-brown uppercase tracking-widest mb-5">
            Soft Skills
          </h4>
        </ScrollReveal>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, i) => (
            <SoftSkillPill key={skill.name} item={skill} index={i} />
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <ScrollReveal delay={0.05}>
          <h4 className="text-sm font-medium text-brown uppercase tracking-widest mb-5">
            Languages
          </h4>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <LanguageCard key={lang.name} item={lang} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
