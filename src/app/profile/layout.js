
import styles from "./layout.module.css";
import Recipe from "../../../Components/Shared/Recipe";

export default function Layout({ children }) {
  return (
    <div className={styles.subcontainer}>
      <h3>Your Recipes</h3>
      <Recipe />
      <div>{children}</div>
    </div>
  );
}
