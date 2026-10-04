import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SiGmail, SiInstagram, SiWhatsapp, SiGoogledrive } from "react-icons/si";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { PageLoader } from "../components/PageLoader";
import { HeroPortrait } from "../components/HeroPortrait";
import { HomeTalentShowcase } from "../components/HomeTalentShowcase";
import { ScrollReveal } from "../components/ScrollReveal";
import { FloatingDecorations } from "../components/FloatingDecorations";

import portrait from "/me.jpeg";
import { projectsData, filterCategories } from "../data/projectsData";
import type { ProjectCategory, ProjectItem } from "../data/projectsData";
import { FeaturedMotionCV } from "../components/FeaturedMotionCV";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailModal } from "../components/ProjectDetailModal";

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const experience = [
  {
    type: "education" as const,
    title: "Universitas Tarumanagara",
    role: "B.A. Desain Komunikasi Visual",
    period: "2024 — 2028",
    description:
      "Pursuing Visual Communication Design with focus on branding, editorial design, and digital media.",
  },
  {
    type: "education" as const,
    title: "Bina Tunas Bangsa",
    role: "Science",
    period: "2020 — 2023",
    description:
      "High school foundation in analytical thinking and creative problem-solving.",
  },
  {
    type: "work" as const,
    title: "CREBO 3 — Universitas Tarumanagara",
    role: "Committee Member",
    period: "2024 — 2025",
    description:
      "Contributed to event branding, visual assets, and creative direction for campus exhibition.",
  },
  {
    type: "work" as const,
    title: "CREBO 2 — Universitas Tarumanagara",
    role: "Committee Member",
    period: "2024 — 2025",
    description:
      "Designed promotional materials and managed visual identity for creative showcase event.",
  },
];

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredMotionCV = projectsData.find((p) => p.isFeatured);
  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.category === activeFilter;
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && <PageLoader onLoadComplete={() => {}} />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-cream text-charcoal">
        <NavBar />

        <main className="flex-grow">
          {/* ─── HERO (fits one viewport) ─── */}
          <section id="home" className="relative overflow-hidden">
            <FloatingDecorations variant="hero" />

            <div className="relative min-h-[calc(100dvh-4rem)] max-h-[920px] flex items-center px-5 md:px-10 pt-[4.5rem] pb-6 md:pb-8">
              <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  <div id="about" className="lg:col-span-7 order-2 lg:order-1 scroll-mt-28">
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="section-label mb-3 md:mb-4"
                    >
                      Multidisciplinary Visual Designer
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.08 }}
                      className="font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.08] tracking-tight mb-4 md:mb-5 text-gray-900"
                    >
                      Cecillia
                      <br />
                      <span className="italic text-brown-light">Tan Handoko</span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.16 }}
                      className="text-charcoal/65 text-[0.8rem] sm:text-sm md:text-[0.9rem] leading-[1.65] max-w-xl lg:max-w-[40
                      .5rem] mb-4 md:mb-5 text-justify"
                    >
                      I am a Visual Communication Design undergraduate at Universitas Tarumanagara
                      with a passion for digital illustration, graphic design, branding, motion
                      graphics, and user interface design. I enjoy transforming ideas into
                      meaningful visual experiences that combine creativity with strategic thinking.
                      Through academic projects, student organizations, and entrepreneurial
                      experiences, I have developed practical skills in brand identity, visual
                      storytelling, marketing, and collaborative design. Proficient in Adobe
                      Illustrator, Photoshop, After Effects, Figma, and Procreate, I am always eager
                      to explore new creative approaches and deliver thoughtful, user-centered
                      solutions. I am always seeking opportunities where I can contribute to
                      impactful projects while continuing to grow as a multidisciplinary designer.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.24 }}
                      className="mb-5 md:mb-6 space-y-2.5"
                    >
                      <p className="text-sm md:text-base text-charcoal/60 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-medium text-charcoal/80 text-base md:text-sm">Universitas Tarumanagara</span>
                        <span className="text-beige font-bold">·</span>
                        <span className="inline-flex items-center gap-1 md:text-sm">
                          <HiOutlineMapPin className="text-brown-light md:text-sm" />
                          Jakarta, Indonesia
                        </span>
                      </p>

                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        {[
                          { icon: "✦", label: "Branding & Identity" },
                          { icon: "🎨", label: "Editorial & Print" },
                          { icon: "🎬", label: "Motion Graphics" },
                          { icon: "💻", label: "UI/UX & Illustration" },
                        ].map((skill) => (
                          <motion.span
                            key={skill.label}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-brown px-4 py-1.5 rounded-full bg-soft-white/80 border border-beige/70 shadow-xs hover:border-blush-dark hover:bg-blush/20 transition-all cursor-default leading-none"
                          >
                            <span className="inline-flex w-[1.1em] h-[1.1em] items-center justify-center text-[0.95em] leading-none">
                              {skill.icon}
                            </span>
                            {skill.label}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.28 }}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <button className="btn-primary gap-2 text-sm py-2.5 px-5">
                        <FiDownload />
                        Download CV
                      </button>
                      <Link to="/certifications">
                        <button className="btn-outline w-full sm:w-auto text-sm py-2.5 px-5">
                          View Certifications
                        </button>
                      </Link>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end items-center">
                    <HeroPortrait
                      src={portrait}
                      alt="Cecillia Tan Handoko"
                      loaded={imgLoaded}
                      onLoad={() => setImgLoaded(true)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 md:px-10 pb-20 md:pb-24">
              <div className="max-w-7xl mx-auto">
                <HomeTalentShowcase />

                <ScrollReveal delay={0.1}>
                  <div className="mt-12 pt-10 border-t border-beige/40">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                      <div>
                        <p className="section-label mb-2">Featured Work</p>
                        <h2 className="font-display text-2xl font-medium text-charcoal">
                          Recent projects
                        </h2>
                      </div>
                      <a
                        href="#projects"
                        className="text-sm text-brown hover:text-brown-light inline-flex items-center gap-1"
                      >
                        See full portfolio <FiArrowUpRight />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {projectsData.slice(0, 3).map((item, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedProject(item)}
                          className="group cursor-pointer"
                        >
                          <motion.div whileHover={{ y: -4 }} className="card-soft overflow-hidden">
                            <div className="aspect-[4/3] overflow-hidden bg-beige/20">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <p className="p-3 text-sm font-medium text-charcoal line-clamp-1">{item.title}</p>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section> 

          {/* ─── PROJECTS ─── */}
          <motion.section
            id="projects"
            {...fadeInUp}
            className="relative px-5 md:px-10 py-20 md:py-28 bg-soft-white overflow-hidden"
          >
            <FloatingDecorations variant="warm" />

            <div className="max-w-6xl mx-auto relative z-10">
              <ScrollReveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                  <div>
                    <p className="section-label mb-2">SELECTED WORKS</p>
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h2 className="section-title">Projects & Visual Work</h2>
                      <a
                        href="https://drive.google.com/drive/folders/1WROCCh04L3UvlNd59WW6BZ0HldeFqsb5?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-brown font-medium hover:underline bg-beige/40 px-3 py-1.5 rounded-full border border-beige/60 transition-colors"
                      >
                        <SiGoogledrive className="text-emerald-600 text-sm" />
                        Google Drive Folder
                        <FiArrowUpRight className="text-xs" />
                      </a>
                    </div>
                    <div className="section-divider" />
                  </div>
                  <p className="text-charcoal/60 text-sm md:text-base max-w-md md:text-right">
                    A collection of selected works across motion, graphic design, illustration, and digital media.
                  </p>
                </div>
              </ScrollReveal>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 md:gap-2.5 mb-12">
                {filterCategories.map((category) => {
                  const isActive = activeFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveFilter(category)}
                      className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-charcoal text-cream shadow-sm"
                          : "bg-cream text-charcoal/70 border border-beige/80 hover:border-charcoal/30 hover:bg-cream/80"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* FEATURED MOTION CV (Shown at top for ALL or MOTION filter) */}
              {(activeFilter === "ALL" || activeFilter === "MOTION") && featuredMotionCV && (
                <FeaturedMotionCV
                  project={featuredMotionCV}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              )}

              {/* EDITORIAL PROJECT GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                {filteredProjects
                  .filter((p) => !(p.isFeatured && (activeFilter === "ALL" || activeFilter === "MOTION")))
                  .map((project, i) => (
                    <ScrollReveal
                      key={project.id}
                      delay={i * 0.06}
                      direction={i % 2 === 0 ? "up" : "scale"}
                    >
                      <ProjectCard
                        project={project}
                        onSelectProject={(p) => setSelectedProject(p)}
                      />
                    </ScrollReveal>
                  ))}
              </div>

              {filteredProjects.length === 0 && (
                <p className="text-sm text-charcoal/45 text-center py-16">
                  No projects available in this category yet.
                </p>
              )}
            </div>
          </motion.section>

          {/* PROJECT DETAIL MODAL */}
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          {/* ─── EXPERIENCE ─── */}
          <motion.section
            id="experience"
            {...fadeInUp}
            className="relative px-5 md:px-10 py-20 md:py-28 overflow-hidden"
          >
            <FloatingDecorations />

            <div className="max-w-6xl mx-auto relative z-10">
              <ScrollReveal>
                <div className="mb-14">
                  <p className="section-label mb-3">Journey</p>
                  <h2 className="section-title">Experience</h2>
                  <div className="section-divider" />
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {experience.map((item, i) => (
                  <ScrollReveal
                    key={i}
                    delay={i * 0.1}
                    direction={i % 2 === 0 ? "left" : "right"}
                  >
                    <motion.div
                      whileHover={{ x: i % 2 === 0 ? 6 : -6 }}
                      className="card-soft p-6 md:p-8 hover:shadow-card transition-shadow duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <span className="inline-block text-[10px] uppercase tracking-widest font-medium text-brown-light bg-beige/50 px-3 py-1 rounded-full mb-3">
                            {item.type === "education" ? "Education" : "Experience"}
                          </span>
                          <h3 className="font-display text-2xl font-medium text-charcoal mb-1 group-hover:text-brown transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-brown font-medium text-sm mb-3">{item.role}</p>
                          <p className="text-charcoal/55 text-sm leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-sm text-charcoal/40 font-medium whitespace-nowrap md:pt-8">
                          {item.period}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ─── CONTACT ─── */}
          <motion.section
            id="contact"
            {...fadeInUp}
            className="relative px-5 md:px-10 py-20 md:py-28 overflow-hidden"
          >
            <FloatingDecorations variant="warm" />

            <div className="max-w-6xl mx-auto relative z-10">
              <ScrollReveal direction="scale">
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.4 }}
                  className="card-soft overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 lg:p-14 bg-gradient-to-br from-brown to-brown-light text-cream">
                      <p className="section-label text-cream/50 mb-3">Get in Touch</p>
                      <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight">
                        Let's create
                        <br />
                        <span className="italic">something beautiful</span>
                      </h2>
                      <p className="text-cream/60 text-sm leading-relaxed max-w-sm">
                        Open to internship opportunities, freelance projects, and creative
                        collaborations with design studios and agencies.
                      </p>
                    </div>

                    <div className="p-8 md:p-12 lg:p-14 space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-5 rounded-2xl bg-beige/20 border border-beige/40"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <SiGmail className="text-xl text-brown" />
                          <h3 className="font-medium text-charcoal">Email</h3>
                        </div>
                        <p className="text-sm text-charcoal/60 mb-4 break-all">
                          cecilliatanhandoko555@gmail.com
                        </p>
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilliatanhandoko555@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn-primary w-full text-sm py-3">
                            Send Message
                          </button>
                        </a>
                      </motion.div>

                      <div className="space-y-3">
                        {[
                          {
                            href: "https://www.instagram.com/liaura.c",
                            icon: SiInstagram,
                            label: "Instagram",
                            handle: "@liaura.c",
                          },
                          {
                            href: "https://wa.me/6281514383863",
                            icon: SiWhatsapp,
                            label: "WhatsApp",
                            handle: "+62 815-1438-3863",
                          },
                        ].map((social) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 6, backgroundColor: "rgba(232, 223, 212, 0.4)" }}
                            className="flex items-center gap-3 p-4 rounded-2xl transition-colors group"
                          >
                            <social.icon className="text-xl text-brown-light group-hover:text-brown transition-colors" />
                            <div>
                              <p className="text-sm font-medium text-charcoal">{social.label}</p>
                              <p className="text-xs text-charcoal/50">{social.handle}</p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </>
  );
};

