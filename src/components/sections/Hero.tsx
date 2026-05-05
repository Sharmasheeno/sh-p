"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { nasalization, mono } from "@/app/fonts";

import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";
import { FiTarget } from "react-icons/fi";

export const Hero = () => {
  const ref = useRef(null);

  const stats = [
    { value: "20+", label: "Projects", sublabel: "Completed" },
    { value: "25+", label: "Technologies", sublabel: "Worked With" },
    { value: "15+", label: "Happy Clients", sublabel: "Worldwide" },
    { value: "100%", label: "Commitment", sublabel: "Quality Work" },
  ];

  const infoCards = [
    {
      icon: <IoLocationOutline className="w-4 h-4" />,
      label: "Location",
      value: "Mogadishu, Somalia",
    },
    {
      icon: <HiOutlineAcademicCap className="w-4 h-4" />,
      label: "Education",
      value: "B.Tech in CSE (Pursuing)",
    },
    {
      icon: <HiOutlineCode className="w-4 h-4" />,
      label: "Experience",
      value: "Developer & Builder",
    },
    {
      icon: <FiTarget className="w-4 h-4" />,
      label: "Focus",
      value: "Build + Analyze + Automate",
    },
  ];

  return (
    <>
      <section
        ref={ref}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-24 pb-8"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                className={`${nasalization.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}
                style={{ color: "hsl(var(--foreground))" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Sharmake
                <br />
                Hassan
              </motion.h1>

              <motion.div
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="text-lg md:text-xl" style={{ color: "hsl(var(--foreground) / 0.9)" }}>
                  Building modern web apps,
                </p>
                <p className="text-lg md:text-xl">
                  <span style={{ color: "hsl(var(--primary))" }}>AI systems</span>
                  <span style={{ color: "hsl(var(--foreground) / 0.9)" }}>, and </span>
                  <span className="text-red-500">data-driven</span>
                </p>
                <p className="text-lg md:text-xl" style={{ color: "hsl(var(--foreground) / 0.9)" }}>
                  digital products
                </p>
              </motion.div>

              <motion.p
                className={`${mono.className} text-sm md:text-base max-w-lg leading-relaxed`}
                style={{ color: "hsl(var(--foreground) / 0.6)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {selfData.bio}
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="btn-primary rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="#projects">
                      View Projects →
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Link href="#contact">
                      Contact Me ✉
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social icons */}
              <motion.div
                className="flex items-center gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <a
                  href={`https://github.com/${selfData.socials_username.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href={`https://linkedin.com/in/${selfData.socials_username.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <FaLinkedinIn className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href={`https://${selfData.socials_username.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <FaGlobe className="w-5 h-5 text-foreground" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Photo + Info cards */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Profile photo */}
              <div className="relative">
                <motion.div
                  className="w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden relative border-2 border-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/profile-full.png"
                    alt="Sharmake Hassan Said"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>

                {/* Floating info cards */}
                <div className="hidden md:flex flex-col gap-3 absolute -right-4 lg:-right-12 top-4">
                  {infoCards.map((card, i) => (
                    <motion.div
                      key={card.label}
                      className="info-card flex items-center gap-3 min-w-[180px]"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      whileHover={{ x: -4, scale: 1.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{card.label}</p>
                        <p className="text-xs font-semibold text-foreground">{card.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section
        className="relative z-20 max-w-5xl mx-auto px-4 -mt-4 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="stats-bar py-6 px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-primary text-lg">
                  {stat.label === "Projects" && "⟨/⟩"}
                  {stat.label === "Technologies" && "🚀"}
                  {stat.label === "Happy Clients" && "👤"}
                  {stat.label === "Commitment" && "📊"}
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};
