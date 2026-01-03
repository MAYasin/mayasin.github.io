import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Aman Yasin",
  description: "Full Stack Developer bridging backend architecture and modern client-side delivery to build scalable web solutions and high-impact software."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
