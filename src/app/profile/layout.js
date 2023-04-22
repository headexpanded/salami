import styles from "./layout.module.css";
import Recipe from "./recipes/Recipe";

export const metadata = {
  description: "Home-made salami recipes",
  keywords:
    "salami, home cured salami, home curing, home-made salami recipes, home-made salami, home-cured salami",
};

export default function Layout({ children }) {
  return (
    <div className={styles.subcontainer}>
      <h3>Your Recipes</h3>
      <Recipe />
      <div>{children}</div>
    </div>
  );
}
