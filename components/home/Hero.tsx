import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/hero.webp"
        alt="Saanvi's Pet Haven"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">

        <div className="max-w-xl text-white">

          <p className="uppercase tracking-[0.4em] text-green-300 mb-4">
            Luxury Pet Daycare & Boarding
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            A Home Away <br />
            From Home
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Safe. Happy. Loved.
            Premium daycare, boarding and grooming
            where every pet is treated like family.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full">
              Book a Visit
            </button>

            <button className="border border-white px-8 py-4 rounded-full">
              Explore Services
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}