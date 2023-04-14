"use client";
import { useState } from "react";
import Link from "next/link";
import LoadingPage from "@/app/loading";
import "../../../styles/globals.css";

export default function AddControllerPage() {
  const [controllerName, setControllerName] = useState("");
  const [controllerLocation, setControllerLocation] = useState("");
  const [controllerPublicIpAddress, setControllerPublicIpAddress] =
    useState("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(controllerName + " " + controllerLocation);
  };
  return (
    <>
      <div className="sub-container animated fadeInDown">
        <h3>Add Controller</h3>
        <form className="controller-form" onSubmit={handleSubmit}>
          <div className="controller-form-input-wrapper">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="controller-form-input"
              value={controllerName}
              onChange={(e) => setControllerName(e.target.value)}
            />
          </div>
          <div className="controller-form-input-wrapper">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              className="controller-form-input"
              value={controllerLocation}
              onChange={(e) => setControllerLocation(e.target.value)}
            />
          </div>
          <div className="controller-form-input-wrapper">
            <label htmlFor="publicIpAddress">Public IP Address:</label>
            <input
              type="text"
              className="controller-form-input"
              placeholder="format: 000.000.000.0"
              value={controllerPublicIpAddress}
              onChange={(e) => setControllerPublicIpAddress(e.target.value)}
            />
          </div>

          <button className="submit-button" type="submit">
            Add
          </button>
        </form>
        <div className="sub-container-detail">
          <Link href="/controllers">
            <button className="btn">Cancel</button>
          </Link>
        </div>
      </div>
    </>
  );
}
