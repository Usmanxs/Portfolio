"use client";

import React, { useEffect, useState } from "react";
import { Home, FileText, Lightbulb, Info, LucideIcon } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "Experience", url: "#experience", icon: FileText },
  { name: "Skills", url: "#Skills", icon: Lightbulb },
  { name: "Contact", url: "#contact", icon: Info },
];

export const NaviBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Adjust the intersection area
      threshold: 0, // Trigger as soon as any part of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id === "hero" 
            ? "Home" 
            : entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
          setActiveSection(sectionName);
        }
      });
    }, options);

    // Observe all sections with a slight delay to ensure DOM is ready
    setTimeout(() => {
      navItems.forEach((item) => {
        const sectionId = item.url.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      navItems.forEach((item) => {
        const sectionId = item.url.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return <AnimeNavBar items={navItems} defaultActive={activeSection} />;
};
