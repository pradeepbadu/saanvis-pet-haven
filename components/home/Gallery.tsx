const galleryItems = [
  {
    title: "Bright Play Zones",
    subtitle: "Interactive outdoor play areas for active pups.",
    accent: "from-amber-100 to-amber-50",
  },
  {
    title: "Luxury Suites",
    subtitle: "Cozy, clean boarding rooms with premium comfort.",
    accent: "from-slate-100 to-slate-50",
  },
  {
    title: "Spa Grooming",
    subtitle: "Relaxed grooming sessions with gentle care.",
    accent: "from-orange-100 to-orange-50",
  },
  {
    title: "Training Moments",
    subtitle: "Positive coaching for better behavior and bond.",
    accent: "from-amber-200 to-amber-100",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 pb-24 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            Gallery
          </p>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
            Moments from our happy pet family
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            Discover the warm, playful, and caring spaces where our furry guests thrive.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[2rem] bg-gradient-to-br p-1 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] transition hover:-translate-y-1">
              <div className={`relative rounded-[2rem] bg-gradient-to-br ${item.accent} p-8 text-slate-950`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_35%)]" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700 shadow-sm">
                    Pet Care
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="max-w-md text-sm leading-7 text-slate-700">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
