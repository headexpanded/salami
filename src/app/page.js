"use client";
import { useState } from "react";
import "../styles/globals.css";
import Link from "next/link";
import LoadingPage from "@/app/loading";

const showCuring = () => {
  return (
    <div className="sub-container animated fadeInDown">
      <h3>Now Curing:</h3>
      <div className="sub-container-detail">
        <p>Recipe: Oak-Smoked Italian</p>
        <p>Start Date: 2023-04-07 14:35:54</p>
        <p>Req. Temp: 23</p>
        <p>Current Temp: 21.5</p>
        <p>Req. Humidity: 14</p>
        <p>Current Humidity: 16</p>
        <p>Next Change: 2023-04-08 19:00:00</p>
      </div>
    </div>
  );
};

const notCuring = () => {
  return (
    <div className="sub-container animated fadeInDown">
      <p>No salami is being cured at the moment.</p>
      <p>Do some curing!</p>
      <div className="sub-container-detail">
        <Link href="/profile/recipes">
          <button className="btn">Choose Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default function Page() {
  const [isCuring, setIsCuring] = useState(false);
  return <div class="card">{isCuring ? showCuring() : notCuring()}</div>;
}
