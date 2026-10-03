import { selfData, skillsData } from "@/constant";
import { Certificate, certificatesData } from "@/constant/certificates";

const SITE_URL = "https://sh-p-kappa.vercel.app";

const credentialCategoryMap: Record<Certificate["category"], string> = {
  "Professional Certificate": "Professional Certificate",
  Specialization: "Certificate",
  "Course Certificate": "Certificate",
  "Academic Achievement": "Award",
  "Community Achievement": "Award",
};

function toCredentialStructuredData(certificate: Certificate) {
  return {
    "@type": "EducationalOccupationalCredential",
    name: certificate.title,
    credentialCategory: credentialCategoryMap[certificate.category],
    ...(certificate.description && { description: certificate.description }),
    ...(certificate.date && { dateCreated: certificate.date }),
    image: `${SITE_URL}${certificate.image}`,
    ...(certificate.verifyUrl && { url: certificate.verifyUrl }),
    recognizedBy: {
      "@type": "Organization",
      name: certificate.issuer,
    },
    ...(certificate.skills && { competencyRequired: certificate.skills }),
  };
}

export function generateCertificatesStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${selfData.name} — Certificates & Achievements`,
    url: `${SITE_URL}/certificates`,
    numberOfItems: certificatesData.length,
    itemListElement: certificatesData.map((certificate, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: toCredentialStructuredData(certificate),
    })),
  };
}

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "B.Tech Computer Science & Engineering",
    },
    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: [
      `https://github.com/${selfData.socials_username.github}`,
      `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://${selfData.socials_username.portfolio}`,
    ],
    url: "https://sh-p-kappa.vercel.app",
    description: selfData.bio,
    knowsAbout: skills,
    hasCredential: certificatesData.map(toCredentialStructuredData),
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sharmake Hassan Said - Portfolio",
    url: "https://sh-p-kappa.vercel.app",
    description:
      "Sharmake Hassan Said's portfolio featuring projects in React, Node.js, AI, Machine Learning, and Data Analytics",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: "https://sh-p-kappa.vercel.app",
    logo: "https://sh-p-kappa.vercel.app/images/logo.png",
    description: selfData.bio,
    founder: {
      "@type": "Person",
      name: selfData.name,
    },
    sameAs: [
      `https://github.com/${selfData.socials_username.github}`,
      `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://${selfData.socials_username.portfolio}`,
    ],
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Sharmake Hassan Said Resume",
    description:
      "Professional resume of Sharmake Hassan Said - Full Stack Developer specializing in web development, backend engineering, computer vision, and machine learning",
    url: "https://sh-p-kappa.vercel.app/resume",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: [
        `https://github.com/${selfData.socials_username.github}`,
        `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      ],
    },
    dateModified: new Date().toISOString(),
    fileFormat: "text/html",
    contentUrl: "https://sh-p-kappa.vercel.app/resume",
    downloadUrl: "https://sh-p-kappa.vercel.app/resume",
    keywords: [
      "Full Stack Developer",
      "Data Analyst",
      "AI Engineer",
      "React Developer",
      "Node.js Developer",
      "Python Developer",
      "Machine Learning",
      "Computer Science",
      "Mogadishu",
      "Somalia",
    ],
  };
}
