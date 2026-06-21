import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden px-6 pb-16 pt-10 md:px-10 md:pt-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
        {/* Status row */}
        <div className="flex animate-fade-up items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-bone-faint">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]" />
            Available — 2026
          </span>
          <span className="hidden sm:inline">Neuchâtel · CH</span>
        </div>

        {/* Centerpiece — wordmark behind, avatar in front (text passes behind the head) */}
        <div className="relative flex flex-1 flex-col items-center justify-center">
          {/* Ambient glow — centered on the avatar */}
          <div className="glow-radial pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2" />

          {/* Avatar: stacked above on mobile, absolutely centered & on top from md */}
          <div className="z-10 mb-[-1.5rem] md:absolute md:left-1/2 md:top-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2">
            <Image
              src="/3D Head_no-background.png"
              alt="Joenvyme — 3D avatar"
              width={620}
              height={620}
              priority
              className="animate-float h-auto w-[64vw] max-w-[360px] drop-shadow-[0_25px_70px_rgba(0,0,0,0.8)] md:w-[37vw] md:max-w-[480px]"
            />
          </div>

          {/* Wordmark behind */}
          <h1 className="relative z-0 select-none text-center font-display font-extrabold leading-[0.82] tracking-tightest text-chalk">
            <span className="block animate-fade-up whitespace-nowrap text-[clamp(2.25rem,9.3vw,8rem)]">
              JOENVYME
            </span>
          </h1>
        </div>

        {/* Subtitle row */}
        <div
          className="mt-6 flex animate-fade-up flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left"
          style={{ animationDelay: "200ms" }}
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
        className="relative z-10 mx-auto mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint transition-colors hover:text-bone"
      >
        ↓ Scroll
      </a>
    </section>
  );
}
