// Returns current fridge data from remote controller
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* const DATA_SOURCE_URL = "http://192.168.178.109:5000/api/current_data";

export async function GET() {
  const currentData = await fetch(DATA_SOURCE_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  console.log(currentData);
  return NextResponse.json(currentData);
} */

/* export async function GET(request: Request) {
  console.log("This is n");
  const { id } = await request.json();
  console.log("The passed id is: " + id);
  try {
    const targetSettings = await prisma.recipeSettings.findFirst({
      where: { recipeId: Number(id), day: { equals: "4" } },
    });
    console.log("The target settings are: " + targetSettings?.humidity);
    return NextResponse.json(targetSettings?.humidity);
  } catch (error: unknown) {
    throw new Error(`Error fetching target data: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
 */

export async function GET(recipeId: string) {
  const id = 1;
  console.log("The passed id is: " + recipeId);
  try {
    const targetSettings = await prisma.recipeSettings.findMany({
      where: { recipeId, day: { equals: "4" } },
    });
    return NextResponse.json(targetSettings);
  } catch (error) {
    throw Error(`Error fetching target data: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
