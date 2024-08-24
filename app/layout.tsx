import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const poppins = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Candle",
    default: "Candle",
  },
  description: "Candle, To light up your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-screen-xl mx-auto bg-white`}>
        {children}
      </body>
    </html>
  );
}
