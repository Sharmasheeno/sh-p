import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Sharmake Hassan Said",
  description:
    "Professional resume of Sharmake Hassan Said, a Full Stack Developer specializing in web applications, backend engineering, computer vision, and machine learning.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Sharmake Hassan Said",
    description:
      "View the professional experience, education, and technical skills of Sharmake Hassan Said.",
    url: "https://sh-p-kappa.vercel.app/resume",
    siteName: "Sharmake Hassan Said",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sharmake Hassan Said Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Sharmake Hassan Said",
    description:
      "View Sharmake Hassan Said's professional resume and experience as a Full Stack Developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
