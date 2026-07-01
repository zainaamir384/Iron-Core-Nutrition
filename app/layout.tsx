import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Core Nutrition | Frontend Project by Zain Aamir",
  description:
    "A modern gym supplements frontend landing page designed and developed by Zain Aamir using Next.js, React, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
