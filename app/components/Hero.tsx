"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduce) {
        gsap.set(".hero-status, .hero-avatar, .hero-word, .hero-word-outline, .hero-sub, .hero-cue", {
          opacity: 1,
          y: 0,
          yPercent: 0,
          scale: 1,
        });
        return;
      }

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-status",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          ".hero-avatar",
          { scale: 0.82, opacity: 0, y: 24 },
          { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: "back.out(1.4)" },
          "-=0.15"
        )
        .fromTo(
          ".hero-word, .hero-word-outline",
          { yPercent: 45, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, ease: "power4.out" },
          "-=0.85"
        )
        .fromTo(
          ".hero-sub",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.55"
        )
        .fromTo(
          ".hero-cue",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.25"
        );

      // Parallax on scroll
      const st = {
        trigger: root.current!,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      };
      gsap.to(".hero-avatar", { y: -70, ease: "none", scrollTrigger: st });
      gsap.to(".hero-word, .hero-word-outline", { y: 44, ease: "none", scrollTrigger: st });
      gsap.to(".hero-glow", { opacity: 0.3, ease: "none", scrollTrigger: st });
    },
    { scope: root, dependencies: [] }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden px-6 pb-16 pt-10 md:px-10 md:pt-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
        {/* Status row */}
        <div className="hero-status flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]" />
            Available — 2026
          </span>
          <span className="hidden sm:inline">Neuchâtel · CH</span>
        </div>

        {/* Centerpiece — wordmark behind, avatar in front (text passes behind the head) */}
        <div className="relative flex flex-1 flex-col items-center justify-center">
          {/* Ambient glow — centered on the avatar */}
          <div className="hero-glow glow-radial pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2" />

          {/* Base text layer (normal filled text) - z-0 */}
          <h1 className="relative z-0 select-none text-center font-display font-extrabold leading-[0.82] tracking-tightest text-chalk">
            <span
              className="hero-word block whitespace-nowrap text-[clamp(2.25rem,9.3vw,8rem)]"
              style={{ opacity: 0 }}
            >
              JOENVYME
            </span>
          </h1>

          {/* Avatar layer - z-10 */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 mb-[-1.5rem] -translate-x-1/2 -translate-y-1/2 md:mb-0">
            <div className="hero-avatar" style={{ opacity: 0 }}>
              <Image
                src="/3D Head_no-background.png"
                alt="Joenvyme — 3D avatar"
                width={620}
                height={620}
                priority
                className="animate-float h-auto w-[64vw] max-w-[360px] drop-shadow-[0_25px_70px_rgba(0,0,0,0.8)] md:w-[37vw] md:max-w-[480px]"
              />
            </div>
          </div>

          {/* Outline text layer - z-20, clipped to avatar area using ellipse */}
          <div 
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            style={{
              clipPath: 'ellipse(min(180px, 32vw) min(220px, 39vw) at 50% 50%)',
              width: '100%',
              height: '100%',
            }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 
                className="select-none text-center font-display font-extrabold leading-[0.82] tracking-tightest"
                aria-hidden="true"
              >
                <span
                  className="hero-word-outline block whitespace-nowrap text-[clamp(2.25rem,9.3vw,8rem)]"
                  style={{ 
                    opacity: 0,
                    WebkitTextStroke: '2px white',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  JOENVYME
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Subtitle row */}
        <div
          className="hero-sub mt-6 flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left"
          style={{ opacity: 0 }}
        >
          <div>
            <p className="font-graffiti text-3xl leading-none text-bone md:text-5xl">
              Creative Developer
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
              Joey Montani
            </p>
          </div>
          <p className="max-w-md text-balance text-sm leading-relaxed text-bone-dim">
            Digital creator working across{" "}
            <span className="text-chalk">visuals</span>,{" "}
            <span className="text-chalk">software</span> and{" "}
            <span className="text-chalk">digital art</span> — at the crossroads
            of design, code and AI, built to leave a mark.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#identity"
        className="hero-cue relative z-10 mx-auto mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint transition-colors hover:text-bone"
        style={{ opacity: 0 }}
      >
        ↓ Scroll
      </a>
    </section>
  );
}
