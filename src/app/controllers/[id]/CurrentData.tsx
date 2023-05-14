// Returns data from controller API

import '@/styles/globals.css';

interface CurrentData {
  controllerId: string;
  current_time: string;
  current_temperature: number;
  current_humidity: number;
}
interface TargetData {
  temp: number;
  humidity: number;
}
type CurrentDataPageProps = {
  controllerId: string;
  recipeId: string;
};

const CURRENT_DATA_SOURCE_URL = 'http://192.168.178.109:5000/api/current_data';

const TARGET_DATA_SOURCE_URL = 'http://localhost:3000/api/targetData';

async function fetchCurrentData(controllerId: string): Promise<CurrentData[]> {
  console.log(controllerId)
  try {
    const response = await fetch(CURRENT_DATA_SOURCE_URL, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        controllerId: `${controllerId}`,
      },
    });
    if (!response.ok) {
      throw new Error('Error fetching current data: ${response.statusText}');
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
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Error fetching target data: ${response.statusText}');
    }
    const targetData: TargetData[] = await response.json();
    return targetData;
  } catch (error) {
    console.log('ERROR: ', error);
    return [];
  }
}

const CurrentDataPage = async ({
  controllerId,
  recipeId,
}: CurrentDataPageProps) => {
  const currentData = await fetchCurrentData(controllerId);
  const targetData = await fetchTargetData(recipeId);

  if (!currentData[0] || !targetData[0]) {
    return <div>Loading...</div>;
  }

  const { current_time, current_temperature, current_humidity } =
    currentData[0];
  const { temp, humidity } = targetData[0];
  const tempVariance = temp - current_temperature;
  return (
    <>
      <div className="dataGrid">
        <div>
          <h4>{current_time}</h4>
          <div className="dataGrid">
            <p>Current Temp: {current_temperature}</p>
            <p>Target Temp: {temp}</p>
            <p>Variance: {tempVariance}</p>
          </div>
          <div className="dataGrid">
            <p>Current Humidity: {current_humidity}</p>
            <p>Target Humidity: {humidity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentDataPage;
