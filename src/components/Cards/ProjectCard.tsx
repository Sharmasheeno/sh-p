import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  index: number;
  title: string;
  desc: string;
  github: string;
  demo?: string;
  tech: string[];
  category?: string;
  number?: number;
  image?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  desc,
  github,
  demo,
  tech,
  category,
  number,
  image,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      key={title}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: {
          duration: 0.3,
          type: "spring" as const,
          stiffness: 400,
          damping: 25,
        },
      }}
      className="group h-full"
    >
      <Card
        className="relative overflow-hidden backdrop-blur-xl border transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl rounded-2xl"
        style={{
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
          borderRadius: "1rem",
        }}
      >
        {/* Category badge + number */}
        <div className="relative p-3 pb-0">
          <div className="flex items-center justify-between mb-3 relative z-10">
            {category && (
              <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/15 text-primary border border-primary/20 backdrop-blur-md">
                {category}
              </span>
            )}
            {number && (
              <span className="text-lg font-bold text-muted-foreground/80 drop-shadow-md">
                {number.toString().padStart(2, "0")}
              </span>
            )}
          </div>

          {/* Project visual: Using GitHub OpenGraph Image */}
          <div className="w-full h-28 rounded-xl mb-3 relative overflow-hidden bg-muted">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, hsl(${(index * 40 + 200) % 360} 40% 15%), hsl(${(index * 40 + 240) % 360} 50% 20%))`,
                }}
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2 left-3 flex items-center gap-1 z-10">
              {tech.slice(0, 3).map((t, i) => (
                <span
                  key={i}
                  className="w-5 h-5 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center backdrop-blur-md"
                >
                  <span className="text-[8px] text-white font-bold">
                    {t.charAt(0)}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 px-3 pb-3 flex flex-col flex-grow">
          <h3
            className="text-sm font-bold mb-1 font-nasalization"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {title}
          </h3>

          <p
            className="text-[11px] mb-3 flex-grow leading-relaxed line-clamp-2"
            style={{ color: "hsl(var(--foreground) / 0.6)" }}
          >
            {desc}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-[10px] h-7 transition-all duration-300 font-mono"
              style={{
                backgroundColor: "hsl(var(--glass-bg-light))",
                borderColor: "hsl(var(--glass-border))",
                color: "hsl(var(--foreground))",
              }}
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-3 h-3 mr-1" />
                Code
              </a>
            </Button>
            {demo && (
              <Button
                size="sm"
                className="flex-1 text-[10px] h-7 btn-primary font-mono"
                asChild
              >
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="w-3 h-3 mr-1" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
