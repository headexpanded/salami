// Returns data from contoller API
import NextResponse from "next";

/* export async function GET() {
  try {
    const recipes = await fetch("http://192.168.178.109:5000/api/temperatures");
    return new Response(JSON.stringify(recipes));
  } catch (error: unknown) {
    throw new Error(`Error fetching recipe: + ${error}`);
  } finally {
    return [];
  }
} */

export async function GET(request: Request) {
  const currentData = await fetch(
    "http://192.168.178.109:5000/api/current_data",
    { headers: { "Content-Type": "application/json" } }
  );
  console.log(currentData);
  return new Response(JSON.stringify(currentData));
}

/* type Temperature = {
  current_temperature: number;
  target_temperature: number;
  temp_on: number;
  temp_off: number;
};

export function GET() {
   const temperatures = fetch("http://192.168.178.109:5000/api/temperatures") 
    
    .then((response) => response.json())
    .then(data => console.log(temperatures.data));
  return NextResponse.json(temperatures);
    };
  /* console.log(temperatures);
  return new Response(JSON.stringify(temperatures)); */
