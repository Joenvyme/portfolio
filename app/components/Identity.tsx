import Reveal from "./Reveal";

const marqueeItems = [
  "Next.js",
  "Three.js / WebGL",
  "Design systems",
  "Generative AI",
  "MCP",
  "Augmented reality",
  "Local-first",
  "Motion",
  "Digital art",
];

export default function Identity() {
  return (
    <section id="identity" className="relative border-t border-white/5 py-20 md:py-40">
      {/* Marquee band */}
      <div className="mb-16 select-none overflow-hidden border-y border-white/5 py-5 md:mb-24">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
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

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
            (01) — Identity
          </span>
        </Reveal>

        <div className="md:col-span-9">
          <Reveal as="h2" className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-chalk md:text-5xl">
            I turn complex ideas into interfaces that feel obvious — and
            unforgettable.
          </Reveal>

          <Reveal
            className="mt-10 grid gap-10 sm:grid-cols-2"
            delay={120}
          >
            <p className="text-balance leading-relaxed text-bone-dim">
              From Swiss law to architecture, from SaaS to the immersive, I work
              where technology meets a real-world need. Every project is a
              promise: make the hard things feel simple.
            </p>
            <p className="text-balance leading-relaxed text-bone-dim">
              A digital creator across the full chain — visuals, software and
              digital art, from concept and art direction to code and shipping.
              Aesthetics in service of use, never the other way around.
            </p>
          </Reveal>

          <Reveal className="mt-14 flex flex-wrap gap-x-10 gap-y-6 sm:gap-x-12" delay={200}>
            {[
              { k: "05+", v: "Products shipped" },
              { k: "100%", v: "Concept → Live" },
              { k: "∞", v: "Iterations" },
            ].map((stat) => (
              <div key={stat.v}>
                <div className="font-display text-4xl font-bold tracking-tight text-bone md:text-5xl">
                  {stat.k}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-faint">
                  {stat.v}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
