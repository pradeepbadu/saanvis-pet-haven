"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "Pricing",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] border border-white/20 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-b-[28px] transition-all duration-300 ease-out ${
          scrolled ? "header-glass-strong" : "header-glass"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-7 sm:py-5 lg:px-10">
          <div className="flex items-center">
            <a
              href="#home"
              className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white"
              aria-label="Saanvi's Pet Haven home"
            >
              <Image
                src="/logo/logo.png"
                alt="Saanvi's Pet Haven"
                width={520}
                height={120}
                priority
                className={`h-[64px] w-auto object-contain transition-all duration-300 ${
                  scrolled ? "sm:h-[72px] lg:h-[76px]" : "sm:h-[76px] lg:h-[84px]"
                }`}
              />
            </a>
          </div>

          <nav className="hidden flex-1 justify-center gap-9 text-sm font-medium text-[#4A3728] md:flex font-poppins">
            {navItems.map((item) => {
              const anchor = item === "About" ? "#about-us" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
              const active = item === "Home";

              return (
                <a
                  key={item}
                  href={anchor}
                  className={`group relative transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    active ? "text-[#B97A20]" : "text-[#4A3728] hover:text-[#B97A20]"
                  }`}
                >
                  <span>{item}</span>
                  <span
                    className={`absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-full scale-x-0 rounded-full bg-[#B97A20] transition-transform duration-300 ${
                      active ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#D9A441] to-[#B97A20] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,164,65,0.35)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/917899291699"
              className="inline-flex items-center gap-2 rounded-full border border-[#C98A2E] bg-transparent px-5 py-3 text-sm font-medium text-[#4A3728] transition duration-200 hover:border-transparent hover:bg-[#B97A20] hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:border-[#B97A20] hover:text-[#B97A20] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 right-0 z-[9998] w-full max-w-[320px] border-l border-white/20 bg-white/95 px-6 py-8 shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">
            Menu
          </span>
          <button
            type="button"
            className="rounded-full p-2 text-slate-700 transition hover:text-[#B97A20] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-5 text-base font-medium text-[#4A3728] font-poppins">
          {navItems.map((item) => {
            const anchor = item === "About" ? "#about-us" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <a
                key={item}
                href={anchor}
                className="rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-[#fff3dd] hover:text-[#B97A20] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <div className="mt-8 space-y-4">
          <a
            href="#contact"
            className="block rounded-full bg-gradient-to-br from-[#D9A441] to-[#B97A20] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,164,65,0.35)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
          <a
            href="https://wa.me/917899291699"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C98A2E] bg-transparent px-6 py-3 text-sm font-medium text-[#4A3728] transition duration-200 hover:border-transparent hover:bg-[#B97A20] hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white"
            onClick={() => setOpen(false)}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-[9997] bg-slate-950/20 transition-opacity duration-300"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
