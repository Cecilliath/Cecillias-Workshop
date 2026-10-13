import React from "react";
import { motion } from "framer-motion";
import type { FilterCategory } from "../data/projectsData";

interface Props {
  categories: FilterCategory[];
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  counts?: Record<FilterCategory, number>;
}

export const ProjectCategoryFilter: React.FC<Props> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <nav
      aria-label="Project categories"
      className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 py-4 border-b border-beige/60 text-xs md:text-sm tracking-wider uppercase font-medium text-charcoal/60"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts ? counts[category] : undefined;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`relative py-2 transition-colors duration-200 cursor-pointer select-none flex items-center gap-1.5 ${
              isActive
                ? "text-charcoal font-semibold"
                : "text-charcoal/50 hover:text-charcoal"
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span className={`text-[10px] opacity-60 font-mono ${isActive ? "text-brown font-bold" : ""}`}>
                ({count})
              </span>
            )}

            {/* Subtle Minimal Editorial Underline */}
            {isActive && (
              <motion.div
                layoutId="editorialFilterUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-charcoal"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};
