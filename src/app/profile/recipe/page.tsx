"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import "../../../styles/globals.css";

interface DaySettings {
  temp: number;
  humidity: number;
  tempOff: number;
  tempOn: number;
  hours: number;
}

const daySettings = [
  { temp: 23, humidity: 93, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 19, humidity: 92, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 19, humidity: 92, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 19, humidity: 92, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 18, humidity: 91, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 18, humidity: 91, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 17, humidity: 90, tempOff: 3600, tempOn: 900, hours: 24 },
  { temp: 17, humidity: 90, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 16, humidity: 89, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 16, humidity: 89, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 15, humidity: 88, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 15, humidity: 87, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 14, humidity: 86, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 13, humidity: 85, tempOff: 5400, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  { temp: 12, humidity: 80, tempOff: 7200, tempOn: 900, hours: 24 },
  ,
];

export default function RecipePage() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeStartTemp, setRecipeStartTemp] = useState("");
  const [recipeStartHumidity, setRecipeStartHumidity] = useState("");
  const [recipeStartHumidityHours, setRecipeStartHumidityHours] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(recipeName + " " + recipeDescription);
  };
  return (
    <>
      <div className="sub-container animated fadeInDown">
        <h3>Set Recipe:</h3>
        <h4>Constants</h4>
        <p>Controller: Raspberry Pi (Rodenburg Garage)</p>
        <p>Humidity Delay: 5</p>
        <div className="sub-container-detail">
          <div className="recipeGrid">
            {daySettings.map((day, index) => (
              <div key={index}>
                <p>
                  <strong>Day: {index}</strong>
                </p>
                <p>Temp: {day.temp}</p>
                <p>Humidity: {day.humidity}</p>
                <p>Temp Off: {day.tempOff}</p>
                <p>Temp On: {day.tempOn}</p>
              </div>
            ))}
          </div>
          <div>
            <p>
              <strong>Resting:</strong>
            </p>
            <p>Temp: 12</p>
            <p>Humidity: 75</p>
            <p>Temp Off: 10800</p>
          </div>
          
            <div className="sub-container">
              <div className="links">
                <Link href="/">
                  <button className="btn">Cancel</button>
                </Link>
                <Link href="/">
                  <button className="btn">Save</button>
                </Link>
              </div>
            </div>
          
        </div>
      </div>
      {/* <form className="controller-form" onSubmit={handleSubmit}>
            <p>Day 1</p>
            <div className="controller-form-input-wrapper">
              <label htmlFor="publicIpAddress">Starting Temp:</label>
              <input
                type="text"
                className="controller-form-input"
                placeholder="21"
                value={recipeStartTemp}
                onChange={(e) => setRecipeStartTemp(e.target.value)}
              />
            </div>
            <div className="controller-form-input-wrapper">
              <label htmlFor="startingHumidity">Starting Humidity:</label>
              <input
                type="text"
                className="controller-form-input"
                placeholder="93"
                value={recipeStartHumidity}
                onChange={(e) => setRecipeStartHumidity(e.target.value)}
              />
            </div>
            <div className="controller-form-input-wrapper">
              <label htmlFor="privateIpAddress">For (in hours):</label>
              <input
                type="text"
                className="controller-form-input"
                value={recipeStartHumidityHours}
                onChange={(e) => setRecipeStartHumidityHours(e.target.value)}
              />
            </div>
            <button className="submit-button" type="submit">
              Add
            </button>
          </form>
 */}
    </>
  );
}
