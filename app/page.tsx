export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-emerald-700">
        🐶 Saanvi's Pet Haven
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Luxury Pet Daycare & Boarding where every pet is treated like family.
      </p>

      <button className="mt-10 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
        Book Now
      </button>
    </main>
  );
}