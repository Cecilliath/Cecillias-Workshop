import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { Certifications } from "./screens/Certifications";
import { ArtGalleryScreen } from "./screens/ArtGalleryScreen";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/gallery/:id" element={<ArtGalleryScreen />} />
      </Routes>
    </div>
  );
};
