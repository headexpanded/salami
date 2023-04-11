"use client"
import { useState } from "react";
import "../styles/globals.css";
import Link from "next/link";
import Controller from "../../Components/Shared/Controller";
import CurrentData from "../../Components/Shared/CurrentData";

// Main app page

const showCuring = () => {
  return (
    <div className="sub-container animated fadeInDown">
      <h3>Now Curing:</h3>
      <Controller />
    </div>
  );
};

const notCuring = () => {
  return (
    <div className="sub-container animated fadeInDown">
      <p>No salami is being cured at the moment.</p>
      <p>Do some curing!</p>
      <div className="sub-container-detail">
        <Link href="/controllers">
          <button className="btn">Select Controller</button>
        </Link>
      </div>
    </div>
  );
};

export default function Page() {
  const [isCuring, setIsCuring] = useState(false);
  return (
    <div>
      {/* <CurrentData controllerId={1} /> */}
      <div className="card">{isCuring ? showCuring() : notCuring()}</div>
    </div>
  );
}
