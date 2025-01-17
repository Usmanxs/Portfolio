"use client";

import { NaviBar } from "@/components/NaviBar";
import ContectMe from "@/components/ContectMe";
import { Projects } from "@/components/Projects";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
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
        className="min-h-screen"
      >
        <Experience />
      </motion.div>

      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="min-h-screen"
      >
        <Projects />
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
      <motion.div
        id="Skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="min-h-screen"
      >
        <Skills />
      </motion.div>
    </div>
  );
}
