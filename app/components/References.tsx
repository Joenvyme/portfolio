import { references } from "./data";
import Reveal from "./Reveal";

export default function References() {
  return (
    <section id="references" className="relative border-t border-white/5 py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
              (03) — References
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-chalk md:text-6xl">
              In their words
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-bone-dim">
              Lawyers, researchers, institutions — those who saw the work up
              close.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {references.map((ref, i) => (
            <Reveal key={ref.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-ink-850 p-7 transition-colors duration-500 hover:border-white/20 hover:bg-ink-800">
                <blockquote className="text-balance font-display text-lg font-medium leading-snug text-chalk">
                  <span className="text-bone">“</span>
                  {ref.quote}
                  <span className="text-bone">”</span>
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-display text-sm font-semibold text-bone">
                    {ref.name}
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-bone-faint">
                    {ref.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
