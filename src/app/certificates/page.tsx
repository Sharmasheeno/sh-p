import type { Metadata } from "next";

import { Background, Footer, Navbar } from "@/components/common";
import { Certificates } from "@/components/sections/Certificates";
import { generateCertificatesStructuredData } from "@/lib/structured-data";

const PAGE_URL = "https://sh-p-kappa.vercel.app/certificates";
const TITLE = "Certificates & Achievements | Sharmake Hassan Said";
const DESCRIPTION =
  "Verified certifications and awards earned by Sharmake Hassan Said: Google IT Support and Google Data Analytics Professional Certificates, DevOps Pro (Linux, Docker, Kubernetes, CI/CD & IaC), Duke University Cloud Computing, Python for Data Science, and Jamhuriya University Academic Performance Awards.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sharmake Hassan Said",
    type: "website",
    images: [
      {
        url: "/certificates/google-it-support.jpg",
        width: 1800,
        height: 1391,
        alt: "Google IT Support Professional Certificate awarded to Sharmake Hassan Said",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/certificates/google-it-support.jpg"],
  },
};

export default function CertificatesPage() {
  const structuredData = generateCertificatesStructuredData();

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Background />
      <Navbar />
      <main className="pt-8">
        <Certificates asPageHeading />
      </main>
      <Footer />
    </div>
  );
}
