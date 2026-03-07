const milestones = [
  {
    year: "1984",
    name: "R&S Records",
    city: "Ghent",
    description:
      "Founded by Renaat Vandepapeliere and Sabine Maes in a shoebox apartment in Ghent. Released Aphex Twin, CJ Bolland, Jaydee. One of the most influential techno labels in the world.",
  },
  {
    year: "1987",
    name: "New Beat",
    city: "Antwerp",
    description:
      "Born accidentally at Ancienne Belgique when DJ Dikke Ronny played a 45rpm EBM record at 33rpm. Belgium invented a genre by mistake.",
  },
  {
    year: "Late '80s",
    name: "Boccaccio",
    city: "Destelbergen",
    description:
      "The New Beat cathedral. 3,000+ Belgians, Dutch and French queuing in a field near Ghent for dark music at insane volume.",
  },
  {
    year: "1994",
    name: "The Fuse",
    city: "Brussels",
    description:
      "Belgium's first dedicated techno club, opened on Rue Blaes by Peter Decuypere and Thierry Coppens. Resident DJ Pierre. Hosted Carl Craig, Richie Hawtin, Daft Punk, Aphex Twin. Ranked #21 in the world in 2010.",
  },
  {
    year: "1995",
    name: "Kozzmozz",
    city: "Ghent",
    description:
      "Started as a small party among friends on the Josef K boat in Ghent harbor. Grew into Belgium's most iconic techno event series at Vooruit.",
  },
  {
    year: "1995",
    name: "10 Days of Techno",
    city: "Ghent",
    description:
      "Ten days of non-stop techno at Vooruit during the Gentse Feesten. Later renamed 10 Days Off. Ran for 20 editions until 2014. Voted best Belgian party in history.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.4em] text-neon-cyan uppercase">
          Belgian Electronic Heritage
        </p>

        <h1 className="text-[clamp(4.5rem,16vw,11rem)] font-black leading-none tracking-tight text-neon-pink animate-glow-pulse">
          BELG.IO
        </h1>

        <div className="my-8 h-px w-20 bg-neon-cyan/50" />

        <p className="text-[0.65rem] tracking-[0.5em] text-[#444] uppercase">
          Reprocessed
        </p>

        <div className="absolute bottom-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <a
            href="#lineage"
            className="flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-[#444] uppercase transition-colors duration-300 hover:text-neon-cyan"
          >
            The Lineage
            <span className="animate-bounce text-base">↓</span>
          </a>
          <a
            href="#releases"
            className="flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-[#444] uppercase transition-colors duration-300 hover:text-neon-cyan"
          >
            Releases
            <span className="animate-bounce text-base">↓</span>
          </a>
        </div>
      </section>

      {/* ─── THE LINEAGE ─── */}
      <section id="lineage" className="px-6 py-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-20 text-[0.65rem] font-semibold tracking-[0.4em] text-neon-cyan uppercase">
            The Lineage
          </p>

          <div className="relative border-l border-neon-cyan/20 pl-10 space-y-20">
            {milestones.map((m) => (
              <div key={m.name} className="relative">
                {/* Timeline dot */}
                <span className="absolute top-3 -left-10 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#00ffff]" />

                <div className="text-5xl font-black leading-none text-neon-cyan glow-cyan mb-3">
                  {m.year}
                </div>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h3 className="text-base font-bold uppercase tracking-[0.15em] text-white">
                    {m.name}
                  </h3>
                  <span className="text-[0.65rem] tracking-[0.2em] text-[#555] uppercase">
                    {m.city}
                  </span>
                </div>

                <p className="text-sm leading-loose text-[#888]">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELEASES ─── */}
      <section id="releases" className="border-t border-neon-cyan/10 px-6 py-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-20 text-[0.65rem] font-semibold tracking-[0.4em] text-neon-cyan uppercase">
            Releases
          </p>

          <div className="border border-neon-cyan/10 p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-2">
              <h3 className="text-base font-bold uppercase tracking-[0.15em] text-white">
                Nacre
              </h3>
              <span className="text-[0.65rem] tracking-[0.2em] text-[#555] uppercase">
                1999 · Minimal Deep House
              </span>
            </div>
            <p className="text-[0.65rem] tracking-[0.2em] text-[#555] uppercase mb-6">
              Point Zero
            </p>
            <p className="text-sm leading-loose text-[#666] italic mb-8">
              Allow the stillness
            </p>
            <iframe
              src="https://suno.com/embed/49d49a0f-8002-4696-8ddf-97bb745ec807"
              width="100%"
              height="150"
              frameBorder="0"
              className="block"
            />
          </div>
        </div>
      </section>

      {/* ─── THE MISSION ─── */}
      <section className="border-t border-neon-cyan/10 px-6 py-28">
        <div className="mx-auto max-w-2xl">
          <p className="mb-16 text-[0.65rem] font-semibold tracking-[0.4em] text-neon-cyan uppercase">
            The Mission
          </p>

          <p className="mb-12 text-sm leading-loose text-[#666]">
            BELG.IO takes this heritage and reprocesses it through modern
            production and AI composition. Archive sounds treated with
            cinematic precision.
          </p>

          <p className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-tight text-white">
            Not nostalgia
            <br />
            <span className="text-neon-pink glow-pink">— elevation.</span>
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-neon-cyan/10 px-6 py-10">
        <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-base font-black text-neon-pink glow-pink">
            BELG.IO
          </span>
          <span className="text-[0.65rem] tracking-[0.3em] text-[#444] uppercase">
            Brussels · Immersive Audio · Est. 2024
          </span>
        </div>
      </footer>
    </>
  );
}
