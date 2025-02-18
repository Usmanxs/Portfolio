"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Full Stack Development (2020-2021)",
    description:
      "Started my journey as a Full Stack Developer working with React, Node.js, and MongoDB. Built responsive web applications, implemented RESTful APIs, and managed database architectures. Focused on delivering clean, maintainable code and optimal user experiences.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Year 1
      </div>
    ),
  },
  {
    title: "Advanced Frontend Development (2021-2022)",
    description:
      "Specialized in modern frontend frameworks including Next.js and TypeScript. Implemented complex state management solutions, optimized application performance, and integrated third-party APIs. Led frontend architecture decisions and mentored junior developers.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="development visualization"
        />
      </div>
    ),
  },
  {
    title: "Backend Excellence (2022-2023)",
    description:
      "Mastered backend development with Node.js, Express, and various databases. Designed and implemented microservices architecture, handled high-traffic applications, and ensured robust security measures. Specialized in API optimization and server-side performance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Year 3
      </div>
    ),
  },
  {
    title: "Full Stack Leadership (2023-Present)",
    description:
      "Leading full stack development initiatives, architecting scalable solutions, and implementing DevOps practices. Expertise in cloud services, CI/CD pipelines, and modern development methodologies. Focusing on system design, team leadership, and technical strategy.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Year 4
      </div>
    ),
  },
];

export function Projects() {
  return (
    <div className="w-full  relative overflow-hidden">
    
      <StickyScroll content={content} />
    </div>
  );
}
