import React from "react";
import Link from "next/link";
import "@/styles/globals.css";
import styles from "./layout.module.css";
export default function ControllerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="card">
        <div>
          <main>{children}</main>
        <div className="links">
          <Link href="./controllers/addController">
            <button className="btn">Add New Controller</button>
          </Link>
        </div>
        </div>
      </main>
    </section>
  );
}
