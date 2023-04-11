// Returns data from contoller API
"use client";
import { useState, useEffect } from "react";

import "@/styles/globals.css";

interface CurrentData {
  day: string;
  current_temperature: number;
  target_temperature: number;
  current_humidity: number;
  target_humidity: number;
  temp_on: number;
  temp_off: number;
}

type CurrentDataPageProps = {
  controllerId: number;
};
async function fetchCurrentData(controllerId: number): Promise<CurrentData[]> {
  try {
    const response = await fetch(
      "http://192.168.178.109:5000/api/current_data",
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching current data: ${response.statusText}");
    }
    const currentData: CurrentData[] = await response.json();
    return currentData;
  } catch (error) {
    console.log(error);
    return [
      {
        day: "Not available",
        current_temperature: 0,
        target_temperature: 0,
        current_humidity: 0,
        target_humidity: 0,
        temp_on: 0,
        temp_off: 0,
      },
    ];
  }
}

const CurrentDataPage = ({ controllerId }: CurrentDataPageProps) => {
  const [currentData, setCurrentData] = useState<CurrentData[]>([
    {
      day: "Hello",
      current_temperature: 0,
      target_temperature: 0,
      current_humidity: 0,
      target_humidity: 0,
      temp_on: 0,
      temp_off: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchCurrentData(controllerId);
      setCurrentData(fetchedData);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60 * 1000);
    return () => clearInterval(intervalId);
  }, [controllerId]);

  return (
    <>
      <div className="card">
        {currentData.map((currentData) => {
          return (
            <div key={currentData.day}>
              <p>
                <strong>Day: {currentData.day}</strong>
              </p>
              <div className="dataGrid">
                <div>
                  <p>Target Temp: {currentData.target_temperature}</p>
                  <p>Current Temp: {currentData.current_temperature}</p>
                  {currentData.current_temperature ===
                  currentData.target_temperature ? (
                    <p className="warning">Good</p>
                  ) : (
                    <p className="warning">Check!</p>
                  )}
                </div>
                <div>
                  <p>Target Humidity: {currentData.target_humidity}</p>
                  <p>Target Humidity: {currentData.current_humidity}</p>
                  {currentData.current_humidity ===
                  currentData.target_humidity ? (
                    <p className="warning">Good</p>
                  ) : (
                    <p className="warning">Check!</p>
                  )}
                </div>
                <div>
                  <p>Temp On: {currentData.temp_on}</p>
                  <p>Temp Off: {currentData.temp_off}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
      p {
        color: #333;
        font-size: 1rem;`}
      </style>
    </>
  );
};

export default CurrentDataPage;
