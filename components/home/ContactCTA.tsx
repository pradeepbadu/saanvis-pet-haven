"use client";

const bookingEmail = "info@saanvispethaven.com";
const bookingPhone = "+917899291699";
const bookingPhoneAlt = "+919880681044";
const bookingWhatsApp = `https://wa.me/917899291699?text=${encodeURIComponent(
  "Hello! I would like to book a visit for my pet at Saanvi's Pet Haven."
)}`;

export default function ContactCTA() {
  const handleBookVisit = () => {
    window.open(bookingWhatsApp, "_blank", "noopener,noreferrer");
    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(
      "Book a Visit"
    )}&body=${encodeURIComponent(
      "Hello! I would like to book a visit for my pet at Saanvi's Pet Haven. Please contact me with availability."
    )}`;
  };

  return (
    <section id="contact" className="px-6 pb-28 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-amber-950/95 p-10 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.45)] lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Ready to Book?
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Give your pet the premium care they deserve.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-amber-100/90 sm:text-base">
              Reach out for bookings, day visits, grooming sessions, and training programs tailored to every furry friend.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleBookVisit}
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-amber-950 shadow-lg shadow-black/10 transition hover:bg-slate-100"
            >
              Book a Visit
            </button>
            <a
              href={bookingWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/60 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
