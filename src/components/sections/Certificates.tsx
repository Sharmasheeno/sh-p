import Link from "next/link";
import { FC } from "react";

import { FiArrowUpRight } from "react-icons/fi";

import { nasalization } from "@/app/fonts";
import { CertificatesGallery } from "@/components/common/CertificatesGallery";
import { certificatesData } from "@/constant/certificates";

interface CertificatesProps {
  /** Render the title as the page `<h1>` (dedicated route) instead of `<h2>`. */
  asPageHeading?: boolean;
  /** Show a link to the dedicated /certificates page. */
  showPageLink?: boolean;
}

const countWhere = (predicate: (c: (typeof certificatesData)[number]) => boolean) =>
  certificatesData.filter(predicate).length;

const stats = [
  { value: certificatesData.length, label: "Credentials" },
  {
    value: countWhere(
      (c) => c.category === "Professional Certificate" || c.category === "Specialization"
    ),
    label: "Professional certs & specializations",
  },
  { value: countWhere((c) => c.category === "Academic Achievement"), label: "Academic awards" },
  { value: countWhere((c) => !!c.verifyUrl), label: "Verifiable online" },
];

export const Certificates: FC<CertificatesProps> = ({
  asPageHeading = false,
  showPageLink = false,
}) => {
  const Heading = asPageHeading ? "h1" : "h2";

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden py-24"
    >
      <div className="relative mx-auto px-4 lg:px-8">
        <header className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            ✦ Certificates &amp; Achievements
          </span>
          <Heading
            id="certificates-heading"
            className={`${nasalization.className} mt-3 text-4xl font-bold text-foreground md:text-5xl`}
          >
            Credentials &amp; Recognition
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Professional certificates and specializations from Google, Duke University,
            KodeKloud, IBM and more, alongside academic awards and community recognition from
            Jamhuriya University. Each verifiable credential links to its official record.
          </p>

          <dl className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-xl border px-3 py-3"
                style={{
                  background: "hsl(var(--glass-bg))",
                  borderColor: "hsl(var(--glass-border))",
                }}
              >
                <dt className="order-2 mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className={`${nasalization.className} order-1 text-2xl font-bold text-primary`}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <CertificatesGallery />

        {showPageLink && (
          <div className="mt-12 text-center">
            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-5 py-2 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View All Certificates
              <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
