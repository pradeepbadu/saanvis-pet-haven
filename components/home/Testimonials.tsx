const testimonials = [
  {
    quote: "Saanvi’s Pet Haven is a blessing! My dog comes home happy, relaxed and full of love.",
    author: "Priya S.",
  },
  {
    quote: "The team is professional, caring and truly treats every dog like their own.",
    author: "Rohan K.",
  },
  {
    quote: "Excellent grooming and training services. Highly recommended for all pet parents!",
    author: "Anitha M.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 pb-24 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            What Pet Parents Say
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            What Pet Parents Say
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={item.author} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-lg font-semibold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-950">{item.author}</p>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">★★★★★</div>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-700">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
