"use client";

import { useRef } from "react";
import { projects } from "./data";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Work() {
  const section = useRef<HTMLElement | null>(null);
  const pinWrap = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const bar = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const trackEl = track.current!;
      const cards = gsap.utils.toArray<HTMLElement>(".work-card", trackEl);
      if (!cards.length) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Reduced motion / fallback: simple horizontal swipe row, no pinning
      if (reduce) {
        pinWrap.current!.style.overflowX = "auto";
        gsap.set(cards, { opacity: 1, scale: 1 });
        return;
      }

      // Keep the first & last card centerable by padding the track symmetrically
      const setPadding = () => {
        const pad = Math.max((window.innerWidth - cards[0].offsetWidth) / 2, 24);
        trackEl.style.paddingLeft = `${pad}px`;
        trackEl.style.paddingRight = `${pad}px`;
      };

      // Exact distance to glide so the LAST card lands dead-centre.
      // (scrollWidth is unreliable here — it omits the right padding.)
      const getScrollAmount = () => {
        const last = cards[cards.length - 1];
        return Math.max(
          last.offsetLeft + last.offsetWidth / 2 - window.innerWidth / 2,
          0
        );
      };

      // Focus effect: the card closest to viewport center is highlighted
      const focus = () => {
        const center = window.innerWidth / 2;
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const norm = Math.min(
            Math.abs(center - cardCenter) / (window.innerWidth * 0.55),
            1
          );
          gsap.set(card, {
            scale: gsap.utils.interpolate(1, 0.82, norm),
            opacity: gsap.utils.interpolate(1, 0.4, norm),
            y: gsap.utils.interpolate(-14, 6, norm),
            filter: `saturate(${gsap.utils.interpolate(1.15, 0.65, norm)}) brightness(${gsap.utils.interpolate(1.05, 0.85, norm)})`,
          });
        });
      };

      setPadding();

      // Stretch the pin so the carousel glides slowly and finishes exactly on
      // the last card, fully highlighted, before the page scroll resumes.
      const SLOWNESS = 1.7;

      let trigger: ScrollTrigger | undefined;

      const horizontal = gsap.to(trackEl, {
        x: () => -getScrollAmount(),
        ease: "none",
        // Frame-synced with the actual track position so the centred card is
        // always highlighted — including the final settled frame.
        onUpdate: () => {
          focus();
          if (bar.current && trigger) {
            gsap.set(bar.current, { scaleX: trigger.progress });
          }
        },
      });

      trigger = ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: () => "+=" + getScrollAmount() * SLOWNESS,
        pin: pinWrap.current,
        scrub: 0.8,
        animation: horizontal,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefreshInit: setPadding,
      });

      // Initial focus state
      focus();
      ScrollTrigger.refresh();
    },
    { scope: section, dependencies: [] }
  );

  return (
    <section
      ref={section}
      id="work"
      className="relative border-t border-white/5"
    >
      <div
        ref={pinWrap}
        className="relative flex h-svh flex-col justify-center overflow-hidden py-10"
      >
        {/* Header */}
        <div className="relative z-30 mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
                (02) — Work
              </span>
              <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-chalk md:text-6xl">
                Selected work
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-bone-dim">
              Scroll to glide through the work — each card opens the live
              project directly. The product speaks for itself.
            </p>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={track}
          className="relative z-10 mt-8 flex items-stretch gap-5 md:mt-10 md:gap-6"
        >
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card group relative flex h-[clamp(340px,58vh,520px)] w-[80vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 sm:w-[58vw] md:w-[44vw] lg:w-[400px]"
            >
              {/* Colored mesh gradient */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: project.gradient }}
              />
              {/* Grain / texture */}
              <div
                className="absolute inset-0 opacity-[0.32] mix-blend-overlay"
                style={{ backgroundImage: NOISE, backgroundSize: "180px 180px" }}
              />
              <div
                className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
                style={{ backgroundImage: NOISE, backgroundSize: "320px 320px" }}
              />
              {/* Dark fade for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between p-6">
                <div className="rounded-xl bg-chalk px-3 py-2 text-ink-950">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
                    {project.year}
                  </div>
                  <div className="font-display text-2xl font-extrabold leading-none">
                    {project.index}
                  </div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-lg text-white backdrop-blur-md transition-colors group-hover:bg-white/25">
                  ↗
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative z-10 mt-auto flex flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-balance text-sm leading-relaxed text-white/75">
                  {project.teaser}
                </p>

                <span className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-chalk px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-950 transition-transform duration-300 group-hover:-translate-y-0.5">
                  Visit {project.domain}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Edge fades — cards melt into the background on both sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[20vw] bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent md:w-[24vw]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[20vw] bg-gradient-to-l from-ink-900 via-ink-900/70 to-transparent md:w-[24vw]" />

        {/* Progress bar */}
        <div className="relative z-30 mx-auto mt-8 w-full max-w-7xl px-6 md:px-10">
          <div className="relative h-px w-full overflow-hidden bg-white/10">
            <div
              ref={bar}
              className="absolute inset-0 h-px w-full origin-left bg-chalk"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
