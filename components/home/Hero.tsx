import Image from "next/image";

const services = ["Daycare", "Boarding", "Grooming", "Training"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fff8f0] pt-28 lg:pt-32 pb-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm ring-1 ring-amber-200">
              <span className="text-amber-700">♥</span>
              <span>Where Tails Wag & Hearts Stay</span>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.12)] lg:p-14">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-5xl font-semibold tracking-[-0.03em] text-slate-950 md:text-6xl xl:text-7xl">
                    A Home Away From
                  </h1>
                  <div className="flex flex-wrap items-end gap-4">
                    <span className="hero-script-strong text-6xl font-semibold leading-[0.85] text-amber-700 sm:text-[5.5rem] md:text-[6.5rem] xl:text-[7rem]">
                      Home
                    </span>
                    <span className="hero-heart h-16 w-16 text-amber-700">
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="max-w-xl text-sm font-semibold tracking-[0.06em] text-slate-700 sm:text-base">
                  Daycare · Boarding · Grooming · Training
                </p>
                <p className="max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
                  Safe. Happy. Loved. Everything your dog deserves, all in one place.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
                {services.map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                    {item}
                    {index < services.length - 1 && <span className="text-amber-500">•</span>}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#services" className="inline-flex items-center justify-center rounded-full bg-amber-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-amber-200/50 transition hover:bg-amber-800">
                  Our Services
                </a>
                <a href="https://wa.me/" className="inline-flex items-center justify-center gap-3 rounded-full border border-amber-300 bg-white px-8 py-4 text-sm font-semibold text-amber-800 transition hover:border-amber-500 hover:bg-amber-50">
                  <span>Chat on WhatsApp</span>
                  <span className="text-amber-700">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[680px] overflow-hidden rounded-[2rem] bg-slate-50 shadow-[0_45px_100px_-50px_rgba(15,23,42,0.35)]">
            <Image
              src="/images/hero.webp"
              alt="Happy golden retriever running in the park"
              width={1200}
              height={900}
              priority
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/95 to-transparent" />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">🐾</div>
            <h3 className="text-lg font-semibold text-slate-950">Safe & Secure</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Clean, secure & monitored environment.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">❤️</div>
            <h3 className="text-lg font-semibold text-slate-950">Lots of Love</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Every pet is treated with love & care.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">👩‍⚕️</div>
            <h3 className="text-lg font-semibold text-slate-950">Expert Care</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Trained professionals for every need.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">🏠</div>
            <h3 className="text-lg font-semibold text-slate-950">Home-like Comfort</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">A cozy second home for your furry friend.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
