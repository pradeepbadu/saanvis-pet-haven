export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-green-600 font-semibold uppercase tracking-widest mb-4">
          Luxury Pet Daycare & Boarding
        </p>

        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Every Pet
          <br />
          Deserves a Second Home
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
          Safe, loving and premium daycare, boarding and grooming
          where your furry family members receive the care they deserve.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full">
            Book a Visit
          </button>

          <button className="border border-green-600 text-green-600 px-8 py-4 rounded-full">
            Explore Services
          </button>
        </div>

      </div>
    </section>
  );
}