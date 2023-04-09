

import Link from "next/link";

const Header = () => {
  return (
    
      <header className="header">
            <div className="logo">
              <Link href="/">Salami</Link>
            </div>
        <div className="container">
          <div className="links">
            <Link href="/">Now Curing</Link>
            <Link href="/profile/recipes">Recipes</Link>
          <Link href="/controllers">Controllers</Link>
          </div>
          </div>
        
      </header>
    
  );
};

export default Header;
