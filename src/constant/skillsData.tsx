import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaBootstrap,
  FaSquareJs,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaChartBar,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiTableau,
  SiR,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi, MdSecurity } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "PHP", logoComponent: FaPhp, color: "#777BB4" },
      { title: "R", logoComponent: SiR, color: "#276DC3" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
      { title: "SQL", logoComponent: FaDatabase, color: "#F29111" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "Flask", logoComponent: SiFlask, color: "#d4d4d8" },
      { title: "Bootstrap", logoComponent: FaBootstrap, color: "#7952B3" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#FFCA28" },
      { title: "Power BI", logoComponent: FaChartBar, color: "#F2C811" },
      { title: "Tableau", logoComponent: SiTableau, color: "#E97627" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "API Design", logoComponent: MdApi, color: "#5C2D91" },
      { title: "Machine Learning", logoComponent: GiBrain, color: "#FF9800" },
      { title: "Data Analytics", logoComponent: FaLaptopCode, color: "#4CAF50" },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      { title: "Authentication", logoComponent: MdSecurity, color: "#F44336" },
      {
        title: "RESTful APIs",
        logoComponent: MdApi,
        color: "#2196F3",
      },
    ],
  },
];

// Service cards data matching the design
export interface ServiceCardData {
  title: string;
  icon: string;
  skills: string[];
}

export const servicesData: ServiceCardData[] = [
  {
    title: "Full Stack Development",
    icon: "code",
    skills: [
      "React, Node.js, Express",
      "MongoDB, MySQL, PHP",
      "Tailwind CSS, TypeScript",
      "RESTful APIs, Authentication",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      "Python, Flask",
      "Predictive Systems",
      "ML-Powered Applications",
      "Intelligent Automation",
    ],
  },
  {
    title: "Data Analytics",
    icon: "chart",
    skills: [
      "Python, R, SQL",
      "Excel, Tableau",
      "Power BI",
      "Data Visualization & Insights",
    ],
  },
  {
    title: "System Design",
    icon: "settings",
    skills: [
      "Role-based Dashboards",
      "Secure Authentication",
      "Admin Panels",
      "API Architecture",
    ],
  },
];
