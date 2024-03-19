import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEMO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-r from-slate-950 to-blue-950 text-white bg-cover"
      style={{
        backgroundImage:
          "url(https://imgs.search.brave.com/K-sTq_berFo9XATHvPZOc3OyRBIEwqIR7Asv_vJFVHQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFnaWMuY29t/L3Byb2R1Y3RfaW1h/Z2VzL0RhcmstYmx1/ZS1XYWxscGFwZXIu/anBn)",
      }}
    >
      <body className={inter.className}>
        <div className="bg-black mx-24 rounded-b-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-x-blue-600 border-b-blue-600 border-t-blue-950/0 p-11 hover:bg-opacity-25 mb-10 shadow-lg shadow-blue-700">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
