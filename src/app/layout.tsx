import { Inter } from "next/font/google";
import "../styles/globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bearztock - Streetwear for the Bold",
  description: "Premium streetwear collection for those who dare to stand out.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
