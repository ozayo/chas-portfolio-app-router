"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Providers } from './providers'
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Providers> 
          <main className="container mx-auto max-w-5xl px-3">
          <Header />
            {children}
            <Footer />
          </main>
        </Providers>   
      </body>
      </html>

  );
}
