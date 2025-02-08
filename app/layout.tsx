import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Shibil M",
  description: "A Progressive Web App showcasing the portfolio and projects of Muhammed Shibil M",
  manifest: "/manifest.json",
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
        className={` text-4xl`}
      >
        {children}
      </body>
    </html>
  );
}
