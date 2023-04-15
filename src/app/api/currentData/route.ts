// Returns current fridge data from remote controller
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://192.168.178.109:5000/api/current_data";

export async function GET() {
  const currentData = await fetch(DATA_SOURCE_URL, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(currentData);
  return NextResponse.json(currentData);
}
