import { projects } from "./data";
import Reveal from "./Reveal";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Work() {
  return (
    <section id="work" className="relative border-t border-white/5 py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
              (02) — Work
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-chalk md:text-6xl">
              Selected work
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-bone-dim">
              Each card opens the live project directly. No detours — the product
              speaks for itself.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 90}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl border border-white/10"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
