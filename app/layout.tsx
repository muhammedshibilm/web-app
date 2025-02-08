import type { Metadata } from "next";
import { Geist as GeistSans, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Shibil M",
  description: "A Progressive Web App showcasing the portfolio and projects of Muhammed Shibil M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-4xl`}
      >
        {children}
      </body>
    </html>
  );
}
