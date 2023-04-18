/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import Controller from "../../Components/Shared/Controller";

// Main app page

const showCuring = () => {
  return (
    <div className="sub-container animated fadeInDown">
      <h3>Now Curing:</h3>
      <Controller controllerId={1} />
    </div>
  );
};

const notCuring = () => {
  const chefId = 1;
  return (
    <div>
      {chefId ? (
        <div className="sub-container animated fadeInDown">
          <div className="sub-container-detail">
            <p>No salami is being cured at the moment.</p>
            <p>Do some curing!</p>
            <Link href="/controllers">
              <button className="btn">Select Controller</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="sub-container animated fadeInDown">
          <div class="sub-container-detail">
            <p>Let's get curing!</p>
            <Link href="/controllers/addController">
              <button className="btn">Add New Controller</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default function HomePage() {
  const [isCuring, setIsCuring] = useState(false);
  return (
    <div>
      {/* <div className="card">{notCuring()}</div> */}
      <div className="card"><h2>Welcome to Salami</h2></div>
    </div>
  );
}
