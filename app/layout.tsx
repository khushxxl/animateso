import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const poppins_extrabold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins-extrabold",
});

const poppins_bold = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const inter_regular = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter-regular",
});
const inter_medium = Inter({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-inter-medium",
});
const inter_bold = Inter({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-inter-bold",
});

const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const instrument_serif_italic = Instrument_Serif({
  weight: ["400"],
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif-italic",
});

export const metadata: Metadata = {
  title: "animated.so",
  description: "animated.so - we create beautiful animations for your product", // TODO: change this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://animated.so/" />
        <meta
          name="twitter:title"
          content="animated.so - we create beautiful animations for your product"
        />
        <meta
          name="twitter:description"
          content="animated.so - we create beautiful animations for your product"
        />
        <meta name="twitter:image" content="/twitter-image.png" />
      </Head>
      <body
        className={`${poppins.variable} ${poppins_extrabold.variable} ${poppins_bold.variable} ${inter.variable} ${inter_regular.variable} ${inter_medium.variable} ${inter_bold.variable} ${instrument_serif.variable} ${instrument_serif_italic.variable}`}
      >
        {/* <Navbar /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
