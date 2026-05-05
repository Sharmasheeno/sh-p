"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { IconType } from "react-icons";
import { useRef } from "react";

import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa6";

import { selfData } from "@/constant";
import { nasalization } from "@/app/fonts";
import { ContactFormCard } from "@/components/Cards";

export const Contact = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Get In Touch
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-3 ${nasalization.className}`}
            style={{ color: "hsl(var(--foreground))" }}
          >
            Let&apos;s build something
            <br />
            amazing <span style={{ color: "hsl(var(--primary))" }}>together</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-lg">
            I&apos;m always open to discussing new projects, creative ideas
            or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <ContactItem
              icon={IoCallOutline}
              label="Phone"
              value={selfData.phone || "+252 611 688 269"}
              href={`tel:${selfData.phone}`}
            />
            <ContactItem
              icon={IoMailOutline}
              label="Email"
              value={selfData.email}
              href={`mailto:${selfData.email}`}
            />
            <ContactItem
              icon={IoLocationOutline}
              label="Location"
              value={`${selfData.current_location.city}, ${selfData.current_location.country}`}
            />

            {/* Social icons row */}
            <div className="flex gap-3 pt-4">
              <a
                href={`https://github.com/${selfData.socials_username.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={`https://linkedin.com/in/${selfData.socials_username.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href={`https://${selfData.socials_username.portfolio}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 text-muted-foreground hover:text-primary"
              >
                <FaGlobe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactFormCard />
          </div>

          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h3
              className="text-xl font-semibold mb-6 font-mono"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Connect With Me
            </h3>

            <div className="space-y-4">
              <ConnectLink
                icon={FaGithub}
                platform="GitHub"
                value={`github.com/${selfData.socials_username.github}`}
                href={`https://github.com/${selfData.socials_username.github}`}
              />
              <ConnectLink
                icon={FaLinkedinIn}
                platform="LinkedIn"
                value={`linkedin.com/in/${selfData.socials_username.linkedin}`}
                href={`https://linkedin.com/in/${selfData.socials_username.linkedin}`}
              />
              <ConnectLink
                icon={FaGlobe}
                platform="Portfolio"
                value={selfData.socials_username.portfolio || ""}
                href={`https://${selfData.socials_username.portfolio}`}
              />
            </div>

            {/* Quote */}
            <motion.div
              className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-4xl text-primary/30 absolute top-2 left-3">&ldquo;</span>
              <p className="text-sm text-muted-foreground italic pl-6 pt-2">
                Code is my craft. Data is my language. Impact is my goal.
              </p>
              <span className="text-4xl text-primary/30 absolute bottom-0 right-3">&rdquo;</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  href,
}) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-3 rounded-xl transition-all duration-300 hover:bg-white/5 group cursor-pointer border border-transparent hover:border-primary/20"
    >
      <div className="flex items-center space-x-3">
        <motion.div
          className="p-2.5 rounded-lg"
          style={{ backgroundColor: "hsl(var(--primary) / 0.15)" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
        </motion.div>
        <div className="flex-1">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

interface ConnectLinkProps {
  icon: IconType;
  platform: string;
  value: string;
  href: string;
}

const ConnectLink: React.FC<ConnectLinkProps> = ({
  icon: Icon,
  platform,
  value,
  href,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
  >
    <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground">{platform}</p>
      <p className="text-sm text-foreground group-hover:text-primary transition-colors">{value}</p>
    </div>
  </a>
);
