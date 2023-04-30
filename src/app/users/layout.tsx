import React from "react";
import "@/styles/globals.css";
import styles from "./layout.module.css";
export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="card">
        <div className={styles.subcontainer}>
          <main>{children}</main>
        </div>
      </main>
    </section>
  );
}
