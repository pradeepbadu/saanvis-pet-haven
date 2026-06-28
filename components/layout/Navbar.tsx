export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-700">
          🐶 Saanvi's Pet Haven
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>

        {/* Button */}
        <button className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition">
          Book Now
        </button>

      </div>
    </nav>
  );
}