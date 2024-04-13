//import next essentials
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
//import context
import { GlobalContextProvider } from "./context/store";

//import components
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
//import styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stocksavvy Inventory Management Software",
  description: "Cloud-based, Advanced ERP Point Of Sales System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <div className="transition">
          <GlobalContextProvider>
            <Navbar />
            {children}
            <Footer />
          </GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
