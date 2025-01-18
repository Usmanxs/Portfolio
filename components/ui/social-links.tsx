"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Social {
  name: string;
  image: string;
  url: string; // URL property
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[];
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);
  const [rotation, setRotation] = React.useState<number>(0);
  const [clicked, setClicked] = React.useState<boolean>(false);

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  };

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 200);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clicked]);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 sm:gap-6",
        className
      )}
      {...props}
    >
      {socials.map((social, index) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className={cn(
            "relative cursor-pointer p-2 sm:p-4 transition-opacity duration-200",
            hoveredSocial && hoveredSocial !== social.name
              ? "opacity-50"
              : "opacity-100"
          )}
          onMouseEnter={() => {
            setHoveredSocial(social.name);
            setRotation(Math.random() * 20 - 10);
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => {
            setClicked(true);
          }}
        >
          <span className="block text-sm sm:text-base font-medium text-center">
            {social.name}
          </span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 sm:hidden lg:flex h-full w-full items-center justify-center"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="w-16 h-16  sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                  initial={{
                    y: -40,
                    rotate: rotation,
                    opacity: 0,
                    filter: "blur(1px)",
                  }}
                  animate={{ y: -50, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
                className=" absolute sm:flex md:flex lg:hidden bottom-0 left-0 right-0  h-full w-full items-center justify-center "
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="w-16 h-16  sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                  initial={{
                    y: -40,
                    rotate: rotation,
                    opacity: 0,
                    filter: "blur(1px)",
                  }}
                  animate={{ y: -50, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
        </a>
      ))}
    </div>
  );
}
