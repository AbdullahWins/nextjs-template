import Navbar from "@/components/navigation/Navbar";
import StoreProvider from "@/components/providers/StoreProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins bg-slate-50 min-h-screen text-neutral-700`}
      >
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
