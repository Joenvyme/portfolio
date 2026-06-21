import { projects } from "./data";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="relative border-t border-white/5 py-28 md:py-40">
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
              Each row opens the live project directly. No detours — the product
              speaks for itself.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/10">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 70}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:py-10"
              >
                <div className="grid grid-cols-12 items-baseline gap-4 px-1 md:px-4">
                  <span className="col-span-2 font-mono text-xs text-bone-faint md:col-span-1">
                    {project.index}
                  </span>

                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-display text-3xl font-bold tracking-tight text-chalk transition-transform duration-500 group-hover:-translate-y-0.5 md:text-5xl">
                      {project.name}
                    </h3>
                    <span className="mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint">
                      {project.domain} ↗
                    </span>
                  </div>

                  <p className="col-span-12 max-w-xl text-balance text-sm leading-relaxed text-bone-dim md:col-span-5 md:col-start-7">
                    {project.teaser}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between px-1 md:px-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-bone-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-bone-faint">
                    {project.year}
                  </span>
                </div>

                {/* Hover arrow */}
                <span className="pointer-events-none absolute right-2 top-8 text-bone opacity-0 transition-all duration-500 group-hover:right-4 group-hover:opacity-100 md:right-4">
                  <span className="font-display text-3xl">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
