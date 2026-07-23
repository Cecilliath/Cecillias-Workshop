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
import { AboutSkills } from "../components/AboutSkills";
import { ScrollReveal, AnimatedCounter } from "../components/ScrollReveal";
import { FloatingDecorations } from "../components/FloatingDecorations";

import portrait from "/me.jpeg";
import { artGalleryItems } from "../data/artGalleryItems";

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "3.89", label: "Current GPA" },
];

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
    const timer = setTimeout(() => setShowLoader(false), 2200);
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
          {/* ─── HERO ─── */}
          <section
            id="home"
            className="relative min-h-screen flex items-center px-5 md:px-10 pt-24 pb-16 overflow-hidden"
          >
            <div
              className="absolute inset-y-0 right-0 w-full lg:w-[55%] opacity-[0.38] lg:opacity-[0.48] pointer-events-none"
              style={{
                backgroundImage: "url(/hero-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center right",
                maskImage: "linear-gradient(to left, black 25%, transparent 90%)",
                WebkitMaskImage: "linear-gradient(to left, black 25%, transparent 90%)",
              }}
            />

            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blush/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-beige/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-label mb-6"
                  >
                    Visual Communication Designer
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.1] tracking-tight mb-6"
                  >
                    Cecillia
                    <br />
                    <span className="italic text-brown-light">Tan Handoko</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="text-charcoal/60 text-base md:text-lg leading-relaxed max-w-lg mb-4"
                  >
                    Undergraduate at Universitas Tarumanagara, crafting thoughtful visual
                    narratives through branding, illustration, and editorial design.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-center gap-2 text-sm text-brown-light mb-10"
                  >
                    <HiOutlineMapPin />
                    Jakarta, Indonesia
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="btn-primary gap-2">
                      <FiDownload className="text-lg" />
                      Download CV
                    </button>
                    <Link to="/certifications">
                      <button className="btn-outline w-full sm:w-auto">
                        View Certifications
                      </button>
                    </Link>
                  </motion.div>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end lg:items-end pb-4 lg:pb-0">
                  <HeroPortrait
                    src={portrait}
                    alt="Cecillia Tan Handoko"
                    loaded={imgLoaded}
                    onLoad={() => setImgLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ─── ABOUT + SKILLS ─── */}
          <motion.section
            id="about"
            {...fadeInUp}
            className="relative px-5 md:px-10 py-20 md:py-28 overflow-hidden"
          >
            <FloatingDecorations />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <ScrollReveal direction="left">
                  <p className="section-label mb-3">About</p>
                  <h2 className="section-title">Design with intention</h2>
                  <div className="section-divider" />
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.1}>
                  <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-6">
                    I am passionate about visual communication and creative design. I enjoy
                    blending aesthetics with functionality, ensuring every project delivers
                    both impact and clarity.
                  </p>
                  <p className="text-charcoal/60 text-base leading-relaxed">
                    Based in Jakarta, I draw inspiration from editorial layouts, soft color
                    palettes, and the intersection of art and commerce — creating work that
                    resonates with brands, agencies, and audiences alike.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">
                {stats.map((stat, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(107,83,68,0.12)" }}
                      className="card-soft p-8 text-center transition-shadow duration-300"
                    >
                      <p className="font-display text-4xl md:text-5xl font-medium text-brown mb-2">
                        <AnimatedCounter value={stat.value} />
                      </p>
                      <p className="text-sm text-charcoal/50">{stat.label}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <AboutSkills />
            </div>
          </motion.section>

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
