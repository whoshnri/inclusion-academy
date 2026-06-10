import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Inclusion Academy | Building Inclusive Organisations",
    template: "%s | Inclusion Academy",
  },
  description:
    "Inclusion Academy helps organisations across Africa move from intention to implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}
