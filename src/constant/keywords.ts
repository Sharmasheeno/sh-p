const names = [
  "Sharmake Hassan Said",
  "Sharmake Hassan",
  "Sharmasheeno",
  "Sharmake Developer",
  "Sharmake Mogadishu",
  "Sharmake Portfolio",
];

const roles = [
  "Full Stack Developer",
  "Data Analyst",
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Backend Developer",
  "Frontend Developer",
  "Web Developer",
  "Software Engineer",
  "System Designer",
];

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Flask",
  "MongoDB",
  "MySQL",
  "PHP",
  "R",
  "SQL",
  "Tailwind CSS",
  "Bootstrap",
  "REST API",
  "Machine Learning",
  "Data Analytics",
  "Power BI",
  "Tableau",
  "Git",
  "GitHub",
];

const projects = [
  "Pediatric Health Hub",
  "JUGFIK AI Project Management",
  "CyberSentinel Malware Detection",
  "Bookish Bliss",
  "SOM Election Platform",
  "SleepMetrics",
  "TaskFlow AI",
  "Smart Recipe Generator",
  "Restaurant Management System",
  "Hospital Readmission Prediction",
];

const locations = [
  "Somalia",
  "Mogadishu",
  "East Africa",
  "Remote",
  "Worldwide",
];

const longTail = [
  "Hire Full Stack Developer Somalia",
  "Best Developer Portfolio Mogadishu",
  "React Developer for startup",
  "AI and Machine Learning Projects",
  "Data Analyst Portfolio",
  "Healthcare Platform Developer",
  "E-commerce Developer Somalia",
  "Civic Tech Developer",
  "Freelance Web Developer Mogadishu",
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
];
