// Returns data from controller API
"use client";
import { useState, useEffect } from "react";
import "@/styles/globals.css";

interface CurrentData {
  current_temperature: number;
  current_humidity: number;
}[]

type CurrentDataPageProps = {
  controllerId: number;
};

const DATA_SOURCE_URL = "http://192.168.178.109:5000/api/current_data";
async function fetchCurrentData(controllerId: number): Promise<CurrentData[]> {
  try {
    const response = await fetch(DATA_SOURCE_URL, {
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Error fetching current data: ${response.statusText}");
    }
    const currentData: CurrentData[] = await response.json();
    return currentData
  } catch (error) {
    console.log(error);
    return [];
  }
}

const CurrentDataPage = ({ controllerId }: CurrentDataPageProps) => {
  const [currentData, setCurrentData] = useState<CurrentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchCurrentData(controllerId);
      setCurrentData(fetchedData);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60 * 1000);
    return () => clearInterval(intervalId);
  }, [controllerId]);

  if (!currentData[0]) {
    return <div>Loading...</div>;
  }

  const {current_temperature, current_humidity} = currentData[0];

  return (
    <>
      <div className="card">
        <div>
          <div className="dataGrid">
            <div>
              <p>Current Temp: {current_temperature}</p>
            </div>
            <div>
              <p>Current Humidity: {current_humidity}</p>
            </div>
          </div>
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
