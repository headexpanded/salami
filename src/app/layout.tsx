import React from "react";
import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthContext from "./AuthContext";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salami",
  description: "Home-made app for curing home-made salami",
  keywords: "salami, home cured salami, home curing, home-made salami curing",
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();
  console.log(session);

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContext session={session}>
          <Header />
          <main className="container">
            <div>{children}</div>
          </main>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
