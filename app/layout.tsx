import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import { KonamiCode } from '@/components/KonamiCode';
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O Bardo Barbado",
  description: "Contos de fantasia com humor e referências do mundo moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${instrumentSans.variable} font-sans antialiased bg-parchment text-ink`}
      >
        {children}
        {/* Easter Egg Global do Konami Code */}
        <KonamiCode />
      </body>
    </html>
  );
}
