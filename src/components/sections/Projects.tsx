"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { nasalization } from "@/app/fonts";

import { ProjectCard } from "../Cards";
import { projectsData } from "@/constant/";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-80px",
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="mx-auto px-4 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="text-primary text-sm font-medium uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ✦ Featured Projects
          </motion.span>
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-foreground mt-3`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected Work
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projectsData.slice(0, 5).map((proj, index) => (
            <ProjectCard
              key={proj.name}
              index={index}
              title={proj.name}
              desc={proj.description}
              github={proj.github_link}
              demo={proj.demo}
              tech={proj.tech}
              category={proj.category}
              number={index + 1}
              image={proj.image}
            />
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {projectsData.slice(5, 10).map((proj, index) => (
            <ProjectCard
              key={proj.name}
              index={index + 5}
              title={proj.name}
              desc={proj.description}
              github={proj.github_link}
              demo={proj.demo}
              tech={proj.tech}
              category={proj.category}
              number={index + 6}
              image={proj.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
