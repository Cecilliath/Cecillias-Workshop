import { useState, useEffect, useCallback } from "react";
import type { ArtGalleryItem } from "../data/artGalleryItems";
import { artGalleryItems, projectCategories } from "../data/artGalleryItems";
import { fetchGoogleDriveProjects } from "../services/gdriveService";

export function useGoogleDriveProjects(folderId?: string) {
  const [projects, setProjects] = useState<ArtGalleryItem[]>(artGalleryItems);
  const [categories, setCategories] = useState<string[]>([...projectCategories]);
  const [loading, setLoading] = useState<boolean>(false);
  const [source, setSource] = useState<"scraped" | "cache">("cache");

  const loadDriveProjects = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchGoogleDriveProjects(folderId);
      if (result.projects && result.projects.length > 0) {
        setProjects(result.projects);
        setCategories(Array.from(new Set([...result.categories, "Character Design", "Logo Design", "Branding"])));
        setSource(result.source);
      }
    } catch (e) {
      console.warn("Using fallback pre-scraped Google Drive dataset:", e);
    } finally {
      setLoading(false);
    }
  }, [folderId]);

  useEffect(() => {
    // Start with instant cached items, then attempt soft background sync
    loadDriveProjects();
  }, [loadDriveProjects]);

  return {
    projects,
    categories,
    loading,
    source,
    refresh: loadDriveProjects,
  };
}
