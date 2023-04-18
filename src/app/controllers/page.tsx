"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import "@/styles/globals.css";

const ControllersPage = () =>{
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

if(isLoaded && !isSignedIn) {
  router.push("/sign-in?redirect=/controllers");
}

    return (
      <>
        <main>
          <div className="subcontainer">
            <div className="links">
              <Link href="./controllers/addController">
                <button className="btn">Add New Controller</button>
              </Link>
            </div>
          </div>
        </main>
      </>
    );
}

export default ControllersPage
