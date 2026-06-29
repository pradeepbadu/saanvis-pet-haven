export default function Footer() {
  return (
    <footer className="bg-[#2d1b08] py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-10">
        <div className="space-y-4">
          <p className="text-2xl font-bold uppercase tracking-[0.2em] text-amber-300">SAANVI’S PET HAVEN</p>
          <p className="max-w-sm text-sm leading-7 text-slate-200">
            A home away from home for your furry friend. Safe. Happy. Loved.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-300">Managed by Nithin Dog Care & Boardings</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li><a href="#home" className="transition hover:text-amber-100">Home</a></li>
            <li><a href="#about" className="transition hover:text-amber-100">About Us</a></li>
            <li><a href="#services" className="transition hover:text-amber-100">Services</a></li>
            <li><a href="#gallery" className="transition hover:text-amber-100">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Our Services</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li><a href="#services" className="transition hover:text-amber-100">Daycare</a></li>
            <li><a href="#services" className="transition hover:text-amber-100">Boarding</a></li>
            <li><a href="#services" className="transition hover:text-amber-100">Grooming</a></li>
            <li><a href="#services" className="transition hover:text-amber-100">Training</a></li>
          </ul>
        </div>

        <div className="space-y-4 text-sm text-slate-200">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Contact Us</h3>
          <p>
            <span className="font-semibold text-slate-50">Booking enquiry:</span>{" "}
            <a href="tel:+917899291699" className="transition hover:text-amber-100">+91 78992 91699</a>
          </p>
          <p>
            <span className="font-semibold text-slate-50">Support:</span>{" "}
            <a href="tel:+919880681044" className="transition hover:text-amber-100">+91 98806 81044</a>
          </p>
          <p>info@saanvispethaven.com</p>
          <p>Sarjapur, Bengaluru, Karnataka</p>
          <a href="https://wa.me/917899291699" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-400">
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-800 px-6 pt-6 text-center text-xs text-slate-400 lg:px-10">
        <span>Privacy Policy</span>
        <span className="mx-3">|</span>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
}
