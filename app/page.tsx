"use client";

import { NaviBar } from "@/components/NaviBar";
import ContectMe from "@/components/ContectMe";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import { LoadingIntro } from "@/components/LoadingIntro";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Should be slightly longer than the LoadingIntro duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoadingIntro />
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation Bar */}
        <NaviBar />

        {/* Sections */}
        <motion.div
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen"
        >
          <Hero />
        </motion.div>

        <motion.div
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full relative"
        >
          <Experience />
        </motion.div>

        <motion.div
          id="Skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-screen relative"
        >
          <Skills />
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="min-h-screen"
        >
          <ContectMe />
        </motion.div>
      </div>
    </div>
  );
}
