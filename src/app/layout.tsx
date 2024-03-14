import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

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
    <html
      lang="en"
      className="bg-gradient-to-r from-slate-950 to-blue-950 text-white"
      style={{
        backgroundImage:
          "url(https://w.wallhaven.cc/full/rd/wallhaven-rd2o7j.jpg)",
      }}
    >
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
