export default function WhyChooseUs() {
  return (
    <section id="about-us" className="px-6 pb-24 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.18)] lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
              About Us
            </p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
              Crafted for Comfort, Wrapped in Care.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              At Saanvi’s Pet Haven, every dog feels at home. From playful daytime fun to cozy overnight stays, our team ensures your pet receives attentive care, grooming, and training with a loving touch.
            </p>
            <div className="space-y-4">
              <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-4 text-sm shadow-sm shadow-amber-100">
                <p className="font-semibold uppercase tracking-[0.25em] text-amber-700">Managed by</p>
                <p className="mt-2 text-lg font-extrabold leading-tight text-slate-950">Nithin Dog Care &amp; Boardings</p>
                <p className="mt-1 text-sm font-semibold text-amber-900">Led by Mr. Basavaraju S.</p>
                <p className="text-sm text-slate-600">Certified &amp; Professional Police Dog Trainer</p>
              </div>
              <a href="#services" className="inline-flex rounded-full bg-amber-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-amber-200/50 transition hover:bg-amber-800">
                Discover Our Approach
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-50 p-1 shadow-xl shadow-slate-200/80">
            <img
              src="/images/hero.webp"
              alt="Golden retriever relaxing in a pet care environment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
