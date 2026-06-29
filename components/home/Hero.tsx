import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/hero.webp"
        alt="Saanvi's Pet Haven"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex items-center pl-16 lg:pl-24 xl:pl-32 pr-8">

        <div className="max-w-2xl text-white">

          <p className="uppercase tracking-[0.4em] text-green-300 mb-4">
            Luxury Pet Daycare & Boarding
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Where Every Tail
            Feels At Home <br />  
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Safe. Happy. Loved.
            Premium daycare, boarding, grooming and training
            where every pet is treated like family.
          </p>

          <div className="mt-12 flex gap-4">

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