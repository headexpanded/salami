"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
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
            <SignedIn>
              <Link href="/controllers">Controllers</Link>
              <Link href="/profile/recipes">Recipes</Link>
            </SignedIn>
          </div>
        </div>
        <div className="links">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Link href="">Login</Link>
            </SignInButton>
          </SignedOut>
        </div>
      </header>
    </>
  );
};

export default Header;
