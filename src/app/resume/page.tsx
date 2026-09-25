"use client";

import { experienceData } from "@/constant";
import { selfData } from "@/constant";
import Link from "next/link";

const skillGroups = [
  {
    title: "Frontend",
    value: "React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Bootstrap, HTML5, CSS3",
  },
  {
    title: "Backend",
    value: "Node.js, Express.js, REST APIs, JWT Authentication, API Integration",
  },
  {
    title: "Databases",
    value: "MongoDB, MySQL, PostgreSQL, Prisma ORM",
  },
  {
    title: "AI & Data",
    value: "Python, Machine Learning Fundamentals, Power BI, Tableau, Pandas",
  },
  {
    title: "Tools & Platforms",
    value: "Git, GitHub, Postman, Firebase, Vercel, VS Code, Figma",
  },
];

const training = [
  "MERN Stack Backend Internship – EastCode",
  "Flutter Development Internship – Hamiskills",
  "Leadership & Technical Project Coordination – JUTSA",
  "Academic Software Development Projects",
];

export default function Resume() {
  return (
    <main className="resume-shell">
      <div className="resume-background" aria-hidden="true" />

      <div className="resume-screen-only">
        <div className="resume-nav-wrap">
          <Link className="resume-back-link" href="/">
            ← Portfolio
          </Link>
          <button className="resume-print-button" type="button" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>
      </div>

      <article className="resume-document">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Professional Resume</p>
            <h1>{selfData.name}</h1>
            <p className="resume-role">Full Stack Developer · MERN Stack Developer · Backend Developer</p>
          </div>
          <div className="resume-contact">
            <span>{selfData.current_location.city}, {selfData.current_location.country}</span>
            <a href={`tel:${selfData.phone}`}>{selfData.phone}</a>
            <a href={`mailto:${selfData.email}`}>{selfData.email}</a>
            <a href={`https://${selfData.socials_username.portfolio}`}>{selfData.socials_username.portfolio}</a>
            <a href={`https://github.com/${selfData.socials_username.github}`}>github.com/{selfData.socials_username.github}</a>
            <a href={`https://linkedin.com/in/${selfData.socials_username.linkedin}`}>linkedin.com/in/{selfData.socials_username.linkedin}</a>
          </div>
        </header>

        <ResumeSection title="Professional Summary">
          <p className="resume-copy">
            Results-driven Full Stack Developer with hands-on experience building scalable web applications, backend APIs,
            AI-powered platforms, and modern dashboard systems using React.js, Next.js, Node.js, Express.js, MongoDB,
            MySQL, and TypeScript. Experienced in internship-based and organizational software development with a strong
            focus on backend engineering, REST APIs, authentication systems, and production-style applications.
          </p>
        </ResumeSection>

        <ResumeSection title="Professional Experience">
          <div className="resume-experience-list">
            {experienceData.map((experience) => (
              <section className="resume-experience" key={`${experience.company}-${experience.role}`}>
                <div className="resume-experience-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <time>{experience.year}</time>
                </div>
                <ul>
                  {experience.description.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="resume-education">
            <h3>B.Tech in Computer Science &amp; Engineering</h3>
            <p>Jamhuriya University of Science &amp; Technology</p>
            <time>Completed: August 2026 · Mogadishu, Somalia</time>
          </div>
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <div className="resume-skills">
            {skillGroups.map((group) => (
              <div className="resume-skill-row" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.value}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Certifications & Training">
          <ul className="resume-training-list">
            {training.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
