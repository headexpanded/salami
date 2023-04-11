import React from "react";
//import styles from "./layout.module.css";
export default function Layout({ children }) {
  return (
    <div>
      <div className="card">{children}</div>
    </div>
  );
}
