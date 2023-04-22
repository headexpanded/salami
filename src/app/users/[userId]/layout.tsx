import React from "react";

import "@/styles/globals.css";
import styles from "./layout.module.css";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>
        <div className={styles.subcontainer}>
          <h3>The Only Chef</h3>
          <main>{children}</main>
        </div>
      </main>
    </section>
  );
}
