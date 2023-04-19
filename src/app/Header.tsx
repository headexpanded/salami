"use client";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">Salami</Link>
        </div>

        <div className="container">
          <div className="links">
            <Link href="/controllers">Controllers</Link>
            <Link href="/profile/recipes">Recipes</Link>
          </div>
        </div>
        <div className="links">
          <Link href=""></Link>
          
        </div>
      </header>
    </>
  );
};

export default Header;
