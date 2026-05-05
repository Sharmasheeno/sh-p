"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa6";

import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant/";
import spaceImg from "@/assets/images/space.png";

const floatingParticles = [
  { x: 200, y: 80, color: "hsl(var(--primary))", duration: 7, delay: 0 },
  { x: 400, y: 120, color: "hsl(var(--secondary))", duration: 8, delay: 1 },
  { x: 600, y: 100, color: "hsl(var(--primary))", duration: 9, delay: 2 },
  { x: 800, y: 70, color: "hsl(var(--secondary))", duration: 10, delay: 3 },
];

export const Footer = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const toggleHeart = () => setIsHeartFilled(!isHeartFilled);

  const socialLinks = [
    {
      icon: LuGithub,
      href: `https://github.com/${selfData.socials_username.github}`,
      label: "GitHub",
    },
    {
      icon: LuLinkedin,
      href: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: FaGlobe,
      href: `https://${selfData.socials_username.portfolio}`,
      label: "Portfolio",
    },
    { icon: LuMail, href: `mailto:${selfData.email}`, label: "Email" },
  ];

  return (
    <footer className="relative bg-background/10 backdrop-blur-md border-t border-border/50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${spaceImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-background/30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full">
        <motion.div
          className="absolute -top-4 -right-4 sm:-top-10 sm:-right-10 md:-top-20 md:-right-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 rounded-full opacity-20 max-w-full max-h-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 sm:-bottom-10 sm:-left-10 md:-bottom-20 md:-left-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 rounded-full opacity-15 max-w-full max-h-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-6 py-6 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-primary text-xl font-bold">&lt;/&gt;</span>
            <h3
              className={`${nasalization.className} text-xl font-semibold text-primary`}
            >
              Sharmasheeno
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/30 bg-card/50 hover:bg-primary/10 hover:text-primary text-muted-foreground transition"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

        <div className="text-xs text-center text-muted-foreground space-y-2">
          <p className="flex items-center justify-center gap-2">
            © 2024 Sharmake Hassan. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2">
            Built with
            <button onClick={toggleHeart} className="text-primary" aria-label="Toggle heart">
              {isHeartFilled ? <TbHeartFilled /> : <TbHeart />}
            </button>
            and lots of ☕
          </p>
        </div>
      </div>

      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-30 pointer-events-none"
          style={{
            background: particle.color,
            left: particle.x,
            top: particle.y,
          }}
          animate={{ y: [0, -20, 0], opacity: [0, 0.3, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </footer>
  );
};
