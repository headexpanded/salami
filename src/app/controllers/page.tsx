"use client"

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import "@/styles/globals.css";

const ControllersPage = () =>{
  
  const router = useRouter();


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
