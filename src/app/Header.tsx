import { getServerSession } from "next-auth/next";
import Link from "next/link";
import SignInButton from "./components/auth/SignInButton";

const Header = async () => {
  const session = await getServerSession();
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
        <div>
          {session ? (
            <div>
              <Link href="/api/auth/signout">Sign Out</Link>
            </div>
          ) : (
            <div>
              <SignInButton />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
