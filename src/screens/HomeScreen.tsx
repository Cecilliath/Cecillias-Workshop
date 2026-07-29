import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si";
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
import { artGalleryItems } from "../data/artGalleryItems";

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
                      className="text-charcoal/65 text-[0.8rem] sm:text-sm md:text-[0.9rem] leading-[1.65] max-w-xl mb-4 md:mb-5"
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
                      <p className="text-xs text-charcoal/60 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-medium text-charcoal/80">Universitas Tarumanagara</span>
                        <span className="text-beige font-bold">·</span>
                        <span className="inline-flex items-center gap-1">
                          <HiOutlineMapPin className="text-brown-light text-sm" />
                          Jakarta, Indonesia
                        </span>
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {[
                          "✦ Branding & Identity",
                          "🎨 Editorial & Print",
                          "🎬 Motion Graphics",
                          "✒ UI/UX & Digital Illustration",
                        ].map((skill, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-[11px] font-medium text-brown px-3 py-1 rounded-full bg-soft-white/80 border border-beige/70 shadow-xs hover:border-blush-dark hover:bg-blush/20 transition-all cursor-default"
                          >
                            {skill}
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
                      {artGalleryItems.slice(0, 3).map((item, i) => (
                        <Link key={i} to={`/gallery/${i}`} className="group">
                          <motion.div whileHover={{ y: -4 }} className="card-soft overflow-hidden">
                            <div className="aspect-[4/3] overflow-hidden bg-beige/20">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <p className="p-3 text-sm font-medium text-charcoal">{item.name}</p>
                          </motion.div>
                        </Link>
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
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                  <div>
                    <p className="section-label mb-3">Portfolio</p>
                    <h2 className="section-title">Selected Projects</h2>
                    <div className="section-divider" />
                  </div>
                  <p className="text-charcoal/50 text-base max-w-sm md:text-right">
                    Creative works and visual explorations from coursework and personal
                    projects.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {artGalleryItems.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "scale"}>
                    <Link to={`/gallery/${i}`} className="group block">
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="card-soft overflow-hidden hover:shadow-elevated transition-shadow duration-500"
                      >
                        <div className="aspect-[4/5] overflow-hidden bg-beige/20 relative">
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-brown/0 group-hover:bg-brown/10 transition-colors duration-500 flex items-end p-5"
                            initial={false}
                          >
                            <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              View project →
                            </span>
                          </motion.div>
                        </div>
                        <div className="p-5 flex items-center justify-between">
                          <div>
                            <p className="text-xs section-label mb-1">Project</p>
                            <h3 className="font-display text-xl font-medium text-charcoal">
                              {item.name}
                            </h3>
                          </div>
                          <motion.div
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-beige/40 flex items-center justify-center group-hover:bg-blush/50 transition-colors duration-300"
                          >
                            <FiArrowUpRight className="text-brown" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </motion.section>

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

