"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

export default function Marquee({ items }: { items: string[] }) {
  const outer = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Infinite horizontal loop (track is duplicated, so move by -50%)
      const loop = gsap.to(track.current, {
        xPercent: -50,
        ease: "none",
        duration: 24,
        repeat: -1,
      });

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      // Skew the band according to scroll velocity
      const proxy = { skew: 0 };
      const setSkew = gsap.quickSetter(outer.current, "skewX", "deg");
      const clamp = gsap.utils.clamp(-10, 10);

      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -180);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            // momentarily accelerate the loop with the scroll
            gsap.to(loop, {
              timeScale: gsap.utils.clamp(1, 4, Math.abs(skew) / 2 + 1),
              duration: 0.2,
              overwrite: true,
              onComplete: () => gsap.to(loop, { timeScale: 1, duration: 0.6 }),
            });
            gsap.to(proxy, {
              skew: 0,
              duration: 0.7,
              ease: "power3",
              overwrite: true,
              onUpdate: () => setSkew(proxy.skew),
            });
          }
        },
      });
    },
    { scope: outer, dependencies: [] }
  );

  return (
    <div
      ref={outer}
      className="mb-16 select-none overflow-hidden border-y border-white/5 py-5 md:mb-24"
    >
      <div
        ref={track}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl font-semibold tracking-tight text-bone-faint md:text-4xl"
          >
            {item}
            <span className="text-bone/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
