import "../../styles/globals.css";
import styles from "./layout.module.css";
import Controller from "../../../Components/Shared/Controller";
export default function Layout({ children }) {
  return (
    <div className={styles.subcontainer}>
      <h3>Your Controllers</h3>
      <Controller />
      <div>{children}</div>
    </div>
  );
}
export const revalidate = 60;
