"use client";
import { useState } from "react";
import Link from "next/link";
import LoadingPage from "@/loading";
import "../../../styles/globals.css";

export default function AddControllerPage() {
  const [controllerName, setControllerName] = useState("");
  const [controllerDescription, setControllerDescription] = useState("");
  const [controllerPublicIpAddress, setControllerPublicIpAddress] =
    useState("");
  const [controllerPrivateIpAddress, setControllerPrivateIpAddress] =
    useState("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(controllerName + " " + controllerDescription);
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
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                className="controller-form-input"
                value={controllerDescription}
                onChange={(e) => setControllerDescription(e.target.value)}
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
            <div className="controller-form-input-wrapper">
              <label htmlFor="privateIpAddress">Private IP Address:</label>
              <input
                type="text"
                className="controller-form-input"
                placeholder="format: 000.000.000.0"
                value={controllerPrivateIpAddress}
                onChange={(e) => setControllerPrivateIpAddress(e.target.value)}
              />
            </div>
            <button className="submit-button" type="submit">
              Add
            </button>
          </form>
          <div className="sub-container-detail">
            <Link href="/settings">
              <button className="btn">Cancel</button>
            </Link>
          </div>
        </div>
      
    </>
  );
}
