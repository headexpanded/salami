import React from "react";
import ChefsPage from "./page";
import "@/styles/globals.css";
import styles from "./layout.module.css";
export default function ChefsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>
        <div className={styles.subcontainer}>
          <main>{children}</main>
        </div>
      </main>
    </section>
  );
}
