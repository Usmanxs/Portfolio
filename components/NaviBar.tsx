"use client";

import React from "react";
import { Home, FileText, CreditCard, Info, LucideIcon } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon; // Use LucideIcon from the lucide-react library
}

const navItems: NavItem[] = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "Experience", url: "#experience", icon: FileText },
  { name: "Projects", url: "#projects", icon: CreditCard },
  { name: "Contact", url: "#contact", icon: Info },
  { name: "Skills", url: "#Skills", icon: Info },
];

export const NaviBar: React.FC = () => {
  return <AnimeNavBar items={navItems} defaultActive="Home" />;
};
