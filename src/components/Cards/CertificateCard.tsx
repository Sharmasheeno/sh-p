import Image from "next/image";
import { FC } from "react";

import { FiCalendar, FiExternalLink, FiMaximize2 } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

import { cn } from "@/lib/utils";
import {
  Certificate,
  categoryLabels,
  formatCertificateDate,
} from "@/constant/certificates";

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
  variant?: "default" | "featured";
  /** Set for above-the-fold cards only. */
  priority?: boolean;
}

const MAX_TAGS = 4;

export const CertificateCard: FC<CertificateCardProps> = ({
  certificate,
  onOpen,
  variant = "default",
  priority = false,
}) => {
  const {
    title,
    issuer,
    platform,
    date,
    category,
    thumbnail,
    alt,
    skills = [],
    verifyUrl,
    description,
  } = certificate;

  const isFeatured = variant === "featured";
  const visibleTags = skills.slice(0, isFeatured ? MAX_TAGS + 1 : MAX_TAGS);
  const hiddenTagCount = skills.length - visibleTags.length;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-xl",
        "shadow-xl transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.15)]",
        "focus-within:border-primary/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      )}
      style={{
        background: "hsl(var(--glass-bg))",
        borderColor: "hsl(var(--glass-border))",
      }}
    >
      {/* Preview */}
      <div className="p-3 pb-0">
        <button
          type="button"
          onClick={() => onOpen(certificate)}
          className="relative block w-full overflow-hidden rounded-xl bg-white/95 aspect-[4/3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`View ${title} certificate`}
        >
          <Image
            src={thumbnail}
            alt={alt}
            fill
            priority={priority}
            sizes={
              isFeatured
                ? "(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="pointer-events-none absolute left-3 top-3 rounded-md border border-primary/30 bg-black/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
            {categoryLabels[category]}
          </span>
          <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[10px] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <FiMaximize2 className="h-3 w-3" aria-hidden="true" />
            Preview
          </span>
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-grow flex-col p-4">
        <h3
          className={cn(
            "font-nasalization font-bold leading-snug text-foreground",
            isFeatured ? "text-base md:text-lg" : "text-sm"
          )}
        >
          {title}
        </h3>

        <p className="mt-1 text-xs font-medium text-secondary">
          {issuer}
          {platform && (
            <span className="text-muted-foreground"> · via {platform}</span>
          )}
        </p>

        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <FiCalendar className="h-3 w-3 shrink-0" aria-hidden="true" />
          {date ? (
            <time dateTime={date}>{formatCertificateDate(date)}</time>
          ) : (
            <span>Date not specified</span>
          )}
        </p>

        {isFeatured && description && (
          <p className="mt-3 text-xs leading-relaxed text-foreground/70 line-clamp-3">
            {description}
          </p>
        )}

        {visibleTags.length > 0 && (
          <ul
            className="mt-3 flex flex-wrap gap-1.5"
            aria-label={`Skills covered by ${title}`}
          >
            {visibleTags.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-foreground/85"
              >
                {skill}
              </li>
            ))}
            {hiddenTagCount > 0 && (
              <li className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                +{hiddenTagCount}
                <span className="sr-only"> more skills</span>
              </li>
            )}
          </ul>
        )}

        {/* Actions */}
        <div className="mt-auto flex gap-2 pt-4">
          <button
            type="button"
            onClick={() => onOpen(certificate)}
            className="btn-primary inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md px-3 font-mono text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <FiMaximize2 className="h-3 w-3" aria-hidden="true" />
            View Certificate
          </button>
          {verifyUrl && (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-md border px-3 font-mono text-[11px] text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{
                backgroundColor: "hsl(var(--glass-bg-light))",
                borderColor: "hsl(var(--glass-border))",
              }}
              aria-label={`Verify ${title} credential (opens in a new tab)`}
            >
              <HiOutlineBadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Verify
              <FiExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
