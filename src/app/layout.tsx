import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Behåll samma variabelnamn som tidigare för kompatibilitet
export const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});
export const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Tripelín",
  description: "Tripelín MVP"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
