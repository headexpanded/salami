import styles from './layout.module.css';
import Controller from './Controller';

export const metadata = {
  description: "Home-cured salami controllers (often a Raspberry Pi)",
  keywords:
    "salami, home cured salami, home curing, home-made salami recipes, home-made salami, home-cured salami",
}

export default function ControllerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.subcontainer}>
      <h3>Your Controllers</h3>
      <div>{children}</div>
      {/* @ts-expect-error Async Server Component*/}
      <Controller />
    </div>
  );
}
