import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eternity-jewelers-website.vercel.app"),
  title: "Eternity Jewelers | Fine Jewelry & Custom Design | Lakewood, NJ",
  description:
    "Over 36 years of crafting exquisite custom jewelry in Lakewood, NJ. Engagement rings, wedding bands, diamond pendants, luxury watches, and expert jewelry repair. Visit our showroom today.",
  keywords:
    "jewelry, custom jewelry, engagement rings, wedding bands, diamond jewelry, luxury watches, jewelry repair, Lakewood NJ, fine jewelry",
  openGraph: {
    title: "Eternity Jewelers | Fine Jewelry & Custom Design",
    description:
      "Over 36 years of crafting exquisite custom jewelry in Lakewood, NJ. Visit our showroom today.",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "en_US",
    siteName: "Eternity Jewelers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternity Jewelers | Fine Jewelry & Custom Design",
    description:
      "Over 36 years of crafting exquisite custom jewelry in Lakewood, NJ.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
