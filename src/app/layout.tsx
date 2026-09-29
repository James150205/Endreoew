import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "NIRWIKARA | Design And Build — Architecture & Interior Studio",
  description:
    "NIRWIKARA Design And Build is an architectural design, bespoke interior, and general construction studio dedicated to uncompromising precision and photorealistic 3D visualization.",
  keywords:
    "NIRWIKARA, Design and Build, Architecture Studio, Interior Design, Luxury Construction, Custom Furniture, 3D Rendering, Enscape",
  icons: {
    icon: "/assets/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
