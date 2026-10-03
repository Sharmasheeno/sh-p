"use client";

import { FC, useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { CertificateCard } from "@/components/Cards/CertificateCard";
import { CertificateModal } from "@/components/common/CertificateModal";
import {
  Certificate,
  CertificateFilter,
  certificateFilters,
  featuredCertificates,
  sortedCertificates,
} from "@/constant/certificates";
import { cn } from "@/lib/utils";

interface ViewerState {
  list: Certificate[];
  index: number;
}

interface CertificatesGalleryProps {
  /** Prefix keeps heading ids unique if the gallery is rendered more than once. */
  idPrefix?: string;
}

export const CertificatesGallery: FC<CertificatesGalleryProps> = ({
  idPrefix = "certificates",
}) => {
  const [filter, setFilter] = useState<CertificateFilter>("All");
  const [viewer, setViewer] = useState<ViewerState | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      filter === "All"
        ? sortedCertificates
        : sortedCertificates.filter((c) => c.category === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const map = new Map<CertificateFilter, number>([["All", sortedCertificates.length]]);
    for (const c of sortedCertificates) {
      map.set(c.category, (map.get(c.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const openFrom = useCallback(
    (list: Certificate[]) => (certificate: Certificate) => {
      const index = list.findIndex((c) => c.id === certificate.id);
      if (index >= 0) setViewer({ list, index });
    },
    []
  );

  const openFeatured = useMemo(() => openFrom(featuredCertificates), [openFrom]);
  const openFiltered = useMemo(() => openFrom(filtered), [openFrom, filtered]);

  const handleIndexChange = useCallback(
    (index: number) => setViewer((v) => (v ? { ...v, index } : v)),
    []
  );
  const handleClose = useCallback(() => setViewer(null), []);

  const featuredHeadingId = `${idPrefix}-featured-heading`;
  const allHeadingId = `${idPrefix}-all-heading`;

  return (
    <>
      {/* Featured */}
      <div role="region" aria-labelledby={featuredHeadingId}>
        <div className="mb-6 flex items-center gap-4">
          <h3
            id={featuredHeadingId}
            className="font-mono text-sm font-semibold uppercase tracking-widest text-foreground"
          >
            Featured Credentials
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" aria-hidden="true" />
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {featuredCertificates.map((certificate) => (
            <li key={certificate.id}>
              <CertificateCard
                certificate={certificate}
                onOpen={openFeatured}
                variant="featured"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* All credentials */}
      <div role="region" aria-labelledby={allHeadingId} className="mt-16">
        <div className="mb-6 flex items-center gap-4">
          <h3
            id={allHeadingId}
            className="font-mono text-sm font-semibold uppercase tracking-widest text-foreground"
          >
            All Credentials
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" aria-hidden="true" />
        </div>

        {/* Filters */}
        <div
          role="group"
          aria-label="Filter credentials by category"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {certificateFilters.map(({ label, value }) => {
            const active = filter === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                aria-pressed={active}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-1.5 text-xs transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active
                    ? "border-primary bg-primary/15 font-semibold text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {label}
                <span
                  className={cn(
                    "rounded-full px-1.5 font-mono text-[10px]",
                    active ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  )}
                >
                  {counts.get(value) ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {filtered.length} credential{filtered.length === 1 ? "" : "s"}
        </p>

        <motion.ul layout={!reduceMotion} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((certificate) => (
              <motion.li
                key={certificate.id}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <CertificateCard certificate={certificate} onOpen={openFiltered} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <CertificateModal
        certificates={viewer?.list ?? []}
        activeIndex={viewer?.index ?? null}
        onIndexChange={handleIndexChange}
        onClose={handleClose}
      />
    </>
  );
};
