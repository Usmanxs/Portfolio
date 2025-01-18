'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Card className="h-screen bg-black/[0.96] relative left-0 overflow-hidden" id="Home">
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* Left content */}
        <div className="flex-1 mt-4 px-4 lg:px-28 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-lg md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            I&apos;m Muhammad Usman
          </h1>

          {/* Animated paragraph */}
          <motion.p
            className="mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-lg"
            initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
            animate={{ opacity: 1, y: 0 }} // Fade in and move into place
            transition={{ duration: 1.2, ease: "easeOut" }} // Animation timing
          >
            Currently working as a Cloud Engineer, I specialize in designing and
            implementing scalable, high-performing solutions that elevate
            business operations. From spinning up resilient cloud infrastructure
            to writing clean, efficient full-stack code, I ensure systems run
            smoother than your morning coffee.
            <br />
            <br />
            With a strong focus on precision and reliability, I’m passionate
            about transforming challenges into opportunities for innovation and
            growth. ☁️💻
          </motion.p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene scene="/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>
  );
}
