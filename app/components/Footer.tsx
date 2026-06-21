import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/5 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="glow-radial pointer-events-none absolute inset-x-0 top-0 mx-auto h-[40vmin] w-[60vmin]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-faint">
            (04) — Contact
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 text-balance font-display text-[clamp(2.5rem,9vw,8rem)] font-extrabold leading-[0.85] tracking-tightest text-chalk">
            Got a project
            <br />
            in mind?
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
            <a
              href="mailto:hello@joenvyme.com"
              className="group font-display text-2xl font-semibold tracking-tight text-bone transition-colors hover:text-chalk md:text-4xl"
            >
              hello@joenvyme.com
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.2em] text-bone-dim">
              <a
                href="https://aptiq.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-chalk"
              >
                Aptiq
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-chalk"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-chalk"
              >
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-faint md:mt-20 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Joenvyme — Creative Developer</span>
          <span>Neuchâtel · Switzerland</span>
        </div>
      </div>
    </footer>
  );
}
