import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heavenz — Terpene Flavor Selector",
  description: "Build your perfect terpene blend and discover matching products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
