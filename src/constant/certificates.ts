/**
 * Certificates & Achievements data.
 *
 * To add a credential:
 * 1. Put a full-size JPG in `public/certificates/` (≈1800px wide) and an
 *    800px-wide copy in `public/certificates/thumbs/` with the same filename.
 * 2. Optionally add the original PDF to `public/certificates/pdf/`.
 * 3. Append an object to `certificatesData` below.
 */

export type CertificateCategory =
  | "Professional Certificate"
  | "Specialization"
  | "Course Certificate"
  | "Academic Achievement"
  | "Community Achievement";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  /** Delivery platform, e.g. Coursera. */
  platform?: string;
  /** ISO date (YYYY-MM-DD). Omit when the source document has no verifiable date. */
  date?: string;
  category: CertificateCategory;
  /** Full-resolution image used in the viewer. */
  image: string;
  /** Lightweight preview used in cards. */
  thumbnail: string;
  /** Intrinsic dimensions of `image` (prevents layout shift). */
  width: number;
  height: number;
  /** Descriptive alt text. */
  alt: string;
  certificateFile?: string;
  verifyUrl?: string;
  description?: string;
  skills?: string[];
  featured?: boolean;
  /** Extra context shown in the viewer (e.g. event name). */
  note?: string;
}

const OWNER = "Sharmake Hassan Said";

const asset = (name: string) => ({
  image: `/certificates/${name}.jpg`,
  thumbnail: `/certificates/thumbs/${name}.jpg`,
});

const COURSERA_SIZE = { width: 1800, height: 1391 };

export const certificatesData: Certificate[] = [
  {
    id: "google-it-support",
    title: "Google IT Support",
    issuer: "Google",
    platform: "Coursera",
    date: "2025-09-11",
    category: "Professional Certificate",
    ...asset("google-it-support"),
    ...COURSERA_SIZE,
    alt: `Google IT Support Professional Certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/google-it-support.pdf",
    verifyUrl: "https://coursera.org/verify/professional-cert/2AZ724Z34S2R",
    description:
      "Completed Google's six-course IT Support Professional Certificate covering technical support fundamentals, computer networking, operating systems, system administration, IT infrastructure, IT security, and AI-assisted job search.",
    skills: [
      "IT Support",
      "Networking",
      "Operating Systems",
      "System Administration",
      "IT Security",
      "Troubleshooting",
    ],
    featured: true,
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics",
    issuer: "Google",
    platform: "Coursera",
    date: "2026-10-02",
    category: "Professional Certificate",
    ...asset("google-data-analytics"),
    ...COURSERA_SIZE,
    alt: `Google Data Analytics Professional Certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/google-data-analytics.pdf",
    verifyUrl: "https://coursera.org/verify/professional-cert/9LFOV7W2RWI9",
    description:
      "Professional certificate covering data preparation, cleaning, analysis, visualization, spreadsheets, SQL, Tableau, and R.",
    skills: [
      "Data Analytics",
      "SQL",
      "Spreadsheets",
      "Tableau",
      "R",
      "Data Visualization",
    ],
    featured: true,
  },
  {
    id: "devops-pro",
    title: "DevOps Pro: Linux, Docker, Kubernetes, CI/CD & IaC",
    issuer: "KodeKloud",
    platform: "Coursera",
    date: "2026-10-03",
    category: "Specialization",
    ...asset("devops-pro"),
    ...COURSERA_SIZE,
    alt: `KodeKloud DevOps Pro: Linux, Docker, Kubernetes, CI/CD & IaC Specialization certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/devops-pro.pdf",
    verifyUrl: "https://coursera.org/verify/specialization/8RNW3UT6RKE3",
    description:
      "Hands-on DevOps specialization covering secure Linux environments, SSH, SELinux, Bash, Ansible, Git, Jenkins, CI/CD pipelines, Docker, Docker Compose, Kubernetes, Terraform, AWS infrastructure, CloudWatch, troubleshooting, and infrastructure automation.",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Jenkins",
      "Ansible",
      "Terraform",
      "AWS",
      "IaC",
      "DevOps",
    ],
    featured: true,
  },
  {
    id: "duke-cloud-computing",
    title: "Building Cloud Computing Solutions at Scale",
    issuer: "Duke University",
    platform: "Coursera",
    date: "2026-10-03",
    category: "Specialization",
    ...asset("duke-cloud-computing"),
    ...COURSERA_SIZE,
    alt: `Duke University Building Cloud Computing Solutions at Scale Specialization certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/duke-cloud-computing.pdf",
    verifyUrl: "https://coursera.org/verify/specialization/QPNJ0PEN12DP",
    description:
      "Cloud computing specialization covering cloud foundations, virtualization, containers, APIs, data engineering, machine learning engineering, MLOps, serverless systems, microservices, Kubernetes, Flask, AWS, Azure, and Google Cloud Platform.",
    skills: [
      "Cloud Computing",
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Flask",
      "Microservices",
      "Serverless",
      "MLOps",
      "Data Engineering",
    ],
    featured: true,
  },
  {
    id: "python-data-science",
    title: "Expressway to Data Science: Python Programming",
    issuer: "University of Colorado Boulder",
    platform: "Coursera",
    date: "2025-09-05",
    category: "Specialization",
    ...asset("python-data-science"),
    ...COURSERA_SIZE,
    alt: `University of Colorado Boulder Expressway to Data Science: Python Programming Specialization certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/python-data-science.pdf",
    verifyUrl: "https://coursera.org/verify/specialization/K34W7OOTYTKS",
    description:
      "Python programming specialization covering variables, operations, flow control, functions, NumPy, Pandas, Matplotlib, and Seaborn for data science.",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Science"],
  },
  {
    id: "ibm-mobile-app-development",
    title: "Introduction to Mobile App Development",
    issuer: "IBM",
    platform: "Coursera",
    date: "2024-10-15",
    category: "Course Certificate",
    ...asset("ibm-mobile-app-development"),
    ...COURSERA_SIZE,
    alt: `IBM Introduction to Mobile App Development course certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/ibm-mobile-app-development.pdf",
    verifyUrl: "https://coursera.org/verify/UDER91DTBA5A",
    description:
      "Online non-credit course authorized by IBM and offered through Coursera, introducing the fundamentals of mobile application development.",
    skills: [
      "Mobile Development",
      "Application Development",
      "Software Development",
    ],
  },
  {
    id: "pearson-ceh-unit-1",
    title: "Certified Ethical Hacker (CEH): Unit 1",
    issuer: "Pearson",
    platform: "Coursera",
    date: "2025-12-31",
    category: "Course Certificate",
    ...asset("pearson-ceh-unit-1"),
    ...COURSERA_SIZE,
    alt: `Pearson Certified Ethical Hacker (CEH): Unit 1 course certificate awarded to ${OWNER}`,
    certificateFile: "/certificates/pdf/pearson-ceh-unit-1.pdf",
    verifyUrl: "https://coursera.org/verify/URM9NQKATNMD",
    description:
      "Online non-credit course unit authorized by Pearson covering foundational ethical hacking and security concepts. This is a course certificate for Unit 1, not the EC-Council CEH professional certification.",
    skills: ["Cybersecurity", "Ethical Hacking", "Security Fundamentals"],
  },
  {
    id: "just-academic-award-2026",
    title: "Academic Performance Award",
    issuer: "Jamhuriya University of Science and Technology (JUST)",
    date: "2026-04-23",
    category: "Academic Achievement",
    ...asset("just-academic-award-2026"),
    width: 1800,
    height: 1294,
    alt: `Jamhuriya University of Science and Technology Academic Performance Award presented to ${OWNER} on 23 April 2026`,
    description:
      "Recognition for stellar academic performance and repeated achievement on the Best of the Best / Merit Scholarship lists.",
    skills: ["Academic Excellence", "Merit Scholarship"],
  },
  {
    id: "just-academic-award-2025",
    title: "Academic Performance Award",
    issuer: "Jamhuriya University of Science and Technology (JUST)",
    date: "2025-10-14",
    category: "Academic Achievement",
    ...asset("just-academic-award-2025"),
    width: 1800,
    height: 1271,
    alt: `Jamhuriya University of Science and Technology Academic Performance Award presented to ${OWNER} on 14 October 2025`,
    description:
      "Recognition for strong academic performance and repeated achievement on the university's Best of the Best / Merit Scholarship lists.",
    skills: ["Academic Excellence", "Merit Scholarship"],
  },
  {
    id: "just-academic-award-2024",
    title: "Academic Performance Award",
    issuer: "Jamhuriya University of Science and Technology (JUST)",
    date: "2024-12-26",
    category: "Academic Achievement",
    ...asset("just-academic-award-2024"),
    width: 1800,
    height: 1290,
    alt: `Jamhuriya University of Science and Technology Academic Performance Award presented to ${OWNER} on 26 December 2024`,
    description:
      "Recognized for stellar academic performance and repeated placement on the Best of the Best / Merit Scholarship lists.",
    skills: ["Academic Excellence", "Merit Scholarship"],
  },
  {
    id: "jutsa-it24-technical-support",
    title: "Technical Support & Community Contribution Recognition",
    issuer: "Jamhuriya University Technology Students Association (JUTSA)",
    category: "Community Achievement",
    ...asset("jutsa-it24-technical-support"),
    width: 1800,
    height: 1310,
    alt: `JUTSA IT24 Day certificate recognizing ${OWNER} for technical support and repairing student devices`,
    note: "IT24 Day / JUTSA Day · Jamhuriya University of Science and Technology",
    description:
      "Recognition for unwavering support and technical expertise, including repairing and troubleshooting student devices and contributing to the student learning environment.",
    skills: [
      "Technical Support",
      "Hardware Troubleshooting",
      "IT Support",
      "Community Contribution",
      "Student Technology Support",
    ],
  },
];

/** Human-readable labels for the category badge. */
export const categoryLabels: Record<CertificateCategory, string> = {
  "Professional Certificate": "Professional Certificate",
  Specialization: "Specialization",
  "Course Certificate": "Course Certificate",
  "Academic Achievement": "Academic Achievement",
  "Community Achievement": "Community / Technical Achievement",
};

export type CertificateFilter = "All" | CertificateCategory;

export const certificateFilters: { label: string; value: CertificateFilter }[] = [
  { label: "All", value: "All" },
  { label: "Professional Certificates", value: "Professional Certificate" },
  { label: "Specializations", value: "Specialization" },
  { label: "Courses", value: "Course Certificate" },
  { label: "Academic Awards", value: "Academic Achievement" },
  { label: "Community Achievements", value: "Community Achievement" },
];

/** Newest first; undated entries last. Stable for equal dates. */
export const sortedCertificates: Certificate[] = [...certificatesData].sort(
  (a, b) => (b.date ?? "").localeCompare(a.date ?? "")
);

export const featuredCertificates: Certificate[] = certificatesData.filter(
  (c) => c.featured
);

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/** Formats an ISO date deterministically (same output on server and client). */
export function formatCertificateDate(date?: string): string {
  if (!date) return "Date not specified";
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}
