import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { GalleryModal } from "../components/GalleryModal";
import { artGalleryItems } from "../data/artGalleryItems";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const ArtGalleryScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const initialIndex = parseInt(id || "0", 10);

  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen bg-cream px-5 md:px-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-brown-light hover:text-brown transition-colors mb-10"
          >
            <FiArrowLeft />
            Back to Projects
          </Link>

          <div className="mb-10">
            <p className="section-label mb-2">Gallery</p>
            <h1 className="font-display text-3xl md:text-4xl font-medium text-charcoal">
              {artGalleryItems[initialIndex]?.name ?? "Project"}
            </h1>
          </div>

          <GalleryModal arts={artGalleryItems} initialIndex={initialIndex} />
        </div>
      </div>
      <Footer />
    </>
  );
};
