import Image from "next/image";

const services = [
  {
    title: "Daycare",
    description: "Fun-filled days with play, socialization & care.",
    image: "/images/service-daycare.png",
  },
  {
    title: "Boarding",
    description: "A safe & cozy stay while you’re away.",
    image: "/images/service-boarding.png",
  },
  {
    title: "Grooming",
    description: "Spa treatments for a clean & happy pup.",
    image: "/images/service-grooming.png",
  },
  {
    title: "Training",
    description: "Positive training for better behavior & bond.",
    image: "/images/service-training.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 pb-24 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
              Our Services
            </p>
            <h2 className="mt-2 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Our Services
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            Everything your dog needs, all under one woof.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_25px_80px_-40px_rgba(15,23,42,0.2)]">
              <div className="relative overflow-hidden bg-slate-100">
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4 p-6 text-center">
                <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
