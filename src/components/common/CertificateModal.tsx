"use client";

import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiFileText,
  FiX,
} from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

import {
  Certificate,
  categoryLabels,
  formatCertificateDate,
} from "@/constant/certificates";

interface CertificateModalProps {
  /** The list the viewer can step through (usually the currently filtered list). */
  certificates: Certificate[];
  /** Index of the open certificate, or `null` when closed. */
  activeIndex: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const CertificateModal: FC<CertificateModalProps> = ({
  certificates,
  activeIndex,
  onIndexChange,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const isOpen = activeIndex !== null && !!certificates[activeIndex];
  const certificate = isOpen ? certificates[activeIndex] : null;
  const total = certificates.length;
  const canNavigate = total > 1;

  useEffect(() => setMounted(true), []);

  const showPrevious = useCallback(() => {
    if (activeIndex === null || !canNavigate) return;
    onIndexChange((activeIndex - 1 + total) % total);
  }, [activeIndex, canNavigate, onIndexChange, total]);

  const showNext = useCallback(() => {
    if (activeIndex === null || !canNavigate) return;
    onIndexChange((activeIndex + 1) % total);
  }, [activeIndex, canNavigate, onIndexChange, total]);

  // Focus management + scroll lock (runs once per open/close, not per slide).
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen]);

  // Keyboard: Escape, arrows, focus trap.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
        return;
      }
      if (event.key === "ArrowRight") {
        showNext();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && (active === first || !dialogRef.current.contains(active))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, showNext, showPrevious]);

  if (!mounted) return null;

  const titleId = certificate ? `certificate-dialog-title-${certificate.id}` : undefined;
  const descriptionId = certificate ? `certificate-dialog-desc-${certificate.id}` : undefined;

  return createPortal(
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="certificate-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-2 backdrop-blur-sm sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border shadow-2xl lg:flex-row"
            style={{
              background: "hsl(var(--glass-bg))",
              borderColor: "hsl(var(--primary) / 0.3)",
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Close */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close certificate viewer"
            >
              <FiX className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Image stage */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/40 p-3 sm:p-6">
              <Image
                key={certificate.id}
                src={certificate.image}
                alt={certificate.alt}
                width={certificate.width}
                height={certificate.height}
                sizes="(min-width: 1024px) 800px, 100vw"
                className="h-auto max-h-[52vh] w-auto max-w-full rounded-lg bg-white object-contain shadow-xl sm:max-h-[60vh] lg:max-h-[82vh]"
                priority
              />

              {canNavigate && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-4"
                    aria-label="Previous certificate"
                  >
                    <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-4"
                    aria-label="Next certificate"
                  >
                    <FiChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Details */}
            <aside className="flex w-full shrink-0 flex-col gap-3 overflow-y-auto border-t p-5 lg:w-[320px] lg:border-l lg:border-t-0 lg:pt-14"
              style={{ borderColor: "hsl(var(--glass-border))" }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-primary">
                  {categoryLabels[certificate.category]}
                </span>
                {canNavigate && activeIndex !== null && (
                  <span className="font-mono text-[11px] text-muted-foreground" aria-live="polite">
                    {activeIndex + 1} / {total}
                  </span>
                )}
              </div>

              <h2 id={titleId} className="font-nasalization text-lg font-bold leading-snug text-foreground">
                {certificate.title}
              </h2>

              <div className="space-y-1 text-xs">
                <p className="font-medium text-secondary">{certificate.issuer}</p>
                {certificate.platform && (
                  <p className="text-muted-foreground">Offered through {certificate.platform}</p>
                )}
                {certificate.note && <p className="text-muted-foreground">{certificate.note}</p>}
                <p className="flex items-center gap-1.5 text-muted-foreground">
                  <FiCalendar className="h-3 w-3" aria-hidden="true" />
                  {certificate.date ? (
                    <time dateTime={certificate.date}>{formatCertificateDate(certificate.date)}</time>
                  ) : (
                    <span>Date not specified</span>
                  )}
                </p>
              </div>

              {certificate.description && (
                <p id={descriptionId} className="text-xs leading-relaxed text-foreground/75">
                  {certificate.description}
                </p>
              )}

              {certificate.skills && certificate.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5" aria-label="Skills">
                  {certificate.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-foreground/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex flex-col gap-2 pt-2">
                {certificate.verifyUrl && (
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <HiOutlineBadgeCheck className="h-4 w-4" aria-hidden="true" />
                    Verify Credential
                    <FiExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                {certificate.certificateFile && (
                  <a
                    href={certificate.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-md border px-4 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    style={{
                      backgroundColor: "hsl(var(--glass-bg-light))",
                      borderColor: "hsl(var(--glass-border))",
                    }}
                  >
                    <FiFileText className="h-4 w-4" aria-hidden="true" />
                    Original PDF
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
