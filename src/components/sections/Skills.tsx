"use client";

import { motion } from "motion/react";
import React, { useRef, useEffect, useState, FC } from "react";

import { nasalization } from "@/app/fonts";
import { skillsData, servicesData } from "@/constant";
import { SkillCard } from "@/components/Cards";

import { HiOutlineCode } from "react-icons/hi";
import { GiBrain } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

interface MarqueeProps {
  skills: LogoProps[];
  direction: "left" | "right";
}

const serviceIcons: Record<string, React.ReactNode> = {
  code: <HiOutlineCode className="w-8 h-8" />,
  brain: <GiBrain className="w-8 h-8" />,
  chart: <FaChartLine className="w-8 h-8" />,
  settings: <MdSettings className="w-8 h-8" />,
};

const Marquee: FC<MarqueeProps> = ({ skills, direction }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    const measureWidth = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);

    return () => window.removeEventListener("resize", measureWidth);
  }, [skills]);

  const speedFactor = 50;
  const animationDuration = marqueeWidth > 0 ? marqueeWidth / speedFactor : 0;

  const animateX =
    direction === "right" ? [0, -marqueeWidth] : [-marqueeWidth, 0];

  return (
    <div className="my-2">
      <div className="relative overflow-hidden py-2">
        <motion.div
          ref={marqueeRef}
          className="flex flex-row gap-8 whitespace-nowrap"
          animate={marqueeWidth > 0 ? { x: animateX } : {}}
          transition={{
            repeat: Infinity,
            duration: animationDuration,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard
              key={`${skill.title}-${index}`}
              title={skill.title}
              color={skill.color || "#ffffff"}
              Icon={skill.logoComponent}
              className="lg:pr-16 md:pr-8 sm:pr-4 pr-2 flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 overflow-hidden relative">
      {/* Services section */}
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="text-center mb-12">
          <motion.span
            className="text-primary text-sm font-medium uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            ✦ What I Do
          </motion.span>
          <motion.h2
            className={`${nasalization.className} text-4xl font-bold text-foreground mt-3`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills & Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/25 transition-colors duration-300">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.skills.map((skill, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            className={`${nasalization.className} text-4xl font-bold text-primary`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
        </div>

        {(skillsData as SkillsDataProps[]).map((category, index) => {
          let direction: "left" | "right";

          if (index % 2 === 0) {
            direction = "right";
          } else {
            direction = "left";
          }

          return (
            <Marquee
              key={category.title}
              skills={category.data}
              direction={direction}
            />
          );
        })}
      </div>
    </section>
  );
};
