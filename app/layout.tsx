import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Core Nutrition — Built For The Work",
  description: "Premium performance nutrition for strength, recovery and serious training.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
