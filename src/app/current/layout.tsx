import React from 'react';
//import styles from "./layout.module.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="card">{children}</div>
    </div>
  );
}
