export default function Logo() {
  return (
    <div className="flex items-center gap-4 rounded-[2rem] border border-amber-200 bg-white/95 px-4 py-3 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.28)]">
      <div className="flex h-16 w-16 items-center justify-center rounded-[1.9rem] bg-amber-100 text-amber-700 shadow-sm shadow-amber-200/70">
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 33c0-6.627 5.373-12 12-12s12 5.373 12 12v10H20V33Z" fill="#fff" />
          <path d="M14 34.5c0-6.627 5.373-12 12-12s12 5.373 12 12v12H14V34.5Z" fill="#f59e0b" opacity="0.9" />
          <path d="M32 18c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5Z" fill="#fff" />
          <path d="M22 25c0-1.657 1.343-3 3-3h14c1.657 0 3 1.343 3 3" stroke="#92400e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 19s-3.5-4-7-4-7 4-7 4" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 19s3.5-4 7-4 7 4 7 4" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 36s3 4 6 4 6-4 6-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="min-w-[150px]">
        <div className="flex flex-wrap items-end gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-700">Saanvi’s</span>
          <span className="text-2xl font-extrabold uppercase tracking-[-0.04em] text-slate-950 md:text-3xl">Pet Haven</span>
        </div>
        <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-slate-500">Daycare & Boarding</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-slate-500">Managed by Nithin Dog Care &amp; Boardings</p>
      </div>
    </div>
  );
}
