
import { useSession, signIn, signOut } from "next-auth/react";
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
      </header>
    </>
  );
};

export default Header;
