// Returns data from controller API
"use client";
import { useState, useEffect } from "react";
import "@/styles/globals.css";

interface CurrentData {
  current_time: string;
  current_temperature: number;
  current_humidity: number;
}
[];

interface TargetData {
  temp: number;
  humidity: number;
}
[];

type CurrentDataPageProps = {
  controllerId: string;
  recipeId: string ;
};

const CURRENT_DATA_SOURCE_URL = "http://192.168.178.109:5000/api/current_data";
const TARGET_DATA_SOURCE_URL = "http://localhost:3000/api/targetData";

async function fetchCurrentData(controllerId: string): Promise<CurrentData[]> {
  try {
    const response = await fetch(CURRENT_DATA_SOURCE_URL, {
      cache: "force-cache",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Error fetching current data: ${response.statusText}");
    }
    const currentData: CurrentData[] = await response.json();
    return currentData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchTargetData(recipeId: string): Promise<TargetData[]> {
  try {
    const response = await fetch(TARGET_DATA_SOURCE_URL, {
      cache: "force-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching target data: ${response.statusText}");
    }
    const targetData: TargetData[] = await response.json();
    return targetData;
  } catch (error) {
    return [];
  }
}

const CurrentDataPage = ({ controllerId, recipeId }: CurrentDataPageProps) => {
  const [currentData, setCurrentData] = useState<CurrentData[]>([]);
  const [targetData, setTargetData] = useState<TargetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCurrentData = await fetchCurrentData(controllerId);
      setCurrentData(fetchedCurrentData);

      const fetchedTargetData = await fetchTargetData(recipeId);
      setTargetData(fetchedTargetData);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 60 * 1000);
    return () => clearInterval(intervalId);
  }, [controllerId, recipeId]);

  if (!currentData[0] || !targetData[0]) {
    return <div>Loading...</div>;
  }

  const { current_time, current_temperature, current_humidity } =
    currentData[0];
  const { temp, humidity } = targetData[0];

  return (
    <>
      <div className="card">
        <div>
          <p>{current_time}</p>
          <p>Current Temp: {current_temperature}</p>
          <p>Current Humidity: {current_humidity}</p>
          <div className="dataGrid"></div>
          <p>Target Temperature: {temp}</p>
          <p>Target Humidity: {humidity}</p>
        </div>
      </div>
      <style jsx>
        {`
      p {
        color: #333;
        font-size: 1rem;`}
      </style>
    </>
  );
};

export default CurrentDataPage;
