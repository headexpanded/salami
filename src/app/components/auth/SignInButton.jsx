"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const SignInButton = () => {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <div>
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={25}
            height={25}
          />
        ) : (
          <Image
            src="/public/salami-02.png"
            alt="user"
            width={50}
            height={50}
          />
        )}
      </div>
    );
  }
  return (
    <div>
      <button
        className="btn-login"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
};
export default SignInButton;
