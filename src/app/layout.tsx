import React from "react";
import { Poppins } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Salami",
  description: "Curing salami from a distance",
  keywords: "salami, home cured salami, home curing, home-made salami",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
