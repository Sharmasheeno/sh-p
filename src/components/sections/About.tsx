"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import { LuMapPinned } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaUser, FaCheck } from "react-icons/fa6";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-60px",
    amount: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
        {/* Section label */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            ✦ About Me
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Title + Info cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h2
              className={`${nasalization.className} text-3xl md:text-4xl font-bold leading-tight`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{ color: "hsl(var(--foreground))" }}>Passionate builder of</span>
              <br />
              <span style={{ color: "hsl(var(--primary))" }}>digital solutions</span>
            </motion.h2>

            {/* Profile image (small) */}
            <motion.div
              className="relative w-full max-w-sm h-48 rounded-2xl overflow-hidden border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/images/profile-headshot.png"
                alt="Sharmake Hassan Said"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-top"
              />
            </motion.div>

            {/* Info cards */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-card flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <HiOutlineAcademicCap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Education</p>
                  <p className="text-sm font-semibold text-foreground">B.Tech in Computer Science & Engineering (Pursuing)</p>
                </div>
              </div>

              <div className="info-card flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <LuMapPinned className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-foreground">Mogadishu, Somalia</p>
                </div>
              </div>

              <div className="info-card flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <FaUser className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Brand</p>
                  <p className="text-sm font-semibold text-foreground">Sharmasheeno</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Description text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {selfData.about.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-sm leading-relaxed"
                style={{ color: "hsl(var(--foreground) / 0.75)" }}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Skills list */}
            <motion.div
              className="space-y-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                <div className="space-y-3">
                  {selfData.aboutSkills?.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {selfData.aboutFocus?.map((focus, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground/80">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
