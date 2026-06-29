import type { Metadata } from "next";
import {
  Great_Vibes,
  Inter,
  Parisienne,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saanvi's Pet Haven | Premium Pet Daycare & Boarding",
  description: "Premium dog daycare, boarding, grooming, and training in a warm luxury space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} ${parisienne.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fff8f0] text-slate-950">{children}</body>
    </html>
  );
}
