import styles from "./layout.module.css";
import Recipe from "./recipes/Recipe";

export const metadata = {
  description: "Home-made salami recipes",
  keywords:
    "salami, home cured salami, home curing, home-made salami recipes, home-made salami, home-cured salami",
};

export default function RecipeLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <div className={styles.subcontainer}>
      <h3>Your Recipes</h3>
      {/* @ts-expect-error Async Server Component*/}
      <Recipe />
      <div>{children}</div>
    </div>
  );
}
