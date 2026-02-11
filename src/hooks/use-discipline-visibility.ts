import { useState, useEffect, useCallback } from "react";
import { disciplines } from "@/data/courses";

const STORAGE_KEY = "aec_discipline_visibility";

type VisibilityMap = Record<string, boolean>;

function getDefaultVisibility(): VisibilityMap {
  const map: VisibilityMap = {};
  disciplines.forEach((d) => {
    map[d.slug] = true;
  });
  return map;
}

function loadVisibility(): VisibilityMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as VisibilityMap;
      // Merge with defaults so new disciplines are visible
      const defaults = getDefaultVisibility();
      return { ...defaults, ...parsed };
    }
  } catch {
    // ignore
  }
  return getDefaultVisibility();
}

export function useDisciplineVisibility() {
  const [visibility, setVisibility] = useState<VisibilityMap>(loadVisibility);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visibility));
  }, [visibility]);

  const toggle = useCallback((slug: string) => {
    setVisibility((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }, []);

  const isVisible = useCallback(
    (slug: string) => visibility[slug] !== false,
    [visibility]
  );

  return { visibility, toggle, isVisible };
}

/** Read-only version for public pages */
export function getVisibleSlugs(): Set<string> {
  const vis = loadVisibility();
  return new Set(Object.entries(vis).filter(([, v]) => v).map(([k]) => k));
}
