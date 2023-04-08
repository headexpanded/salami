import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import "@/styles/globals.css";
import Recipe from "../../../../Components/Shared/Recipe";

interface Recipe {
  id: number | null;
  name: string;
  description: string;
  createdAt: Date;
}
interface RecipeSettings {
  day: string;
  temp: number;
  humidity: number;
  tempOff: number;
  tempOn: number;
  hours: number;
}
interface RecipeSettingsInclude {
  select?: {
    day?: true;
    temp?: true;
    humidity?: true;
    tempOff?: true;
    tempOn?: true;
    hours?: true;
  };
}

interface RecipePageProps {
  recipeId: number;
}

const prisma = new PrismaClient();

async function fetchRecipeSettings(recipeId: number) {
  try {
    const recipeSettings = await prisma.recipeSettings.findMany({
      where: { recipeId: recipeId },
    } as RecipeSettingsInclude);
    return recipeSettings;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching recipe settings: + ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export default async function RecipePage() {
  const recipeSettings = await fetchRecipeSettings(1);
  return (
    <>
      <div className="sub-container animated fadeInDown">
        <Recipe />
        
        <div className="sub-container-detail">
          <div className="recipeGrid">
            {recipeSettings.map((setting: RecipeSettings) => (
              <div key={setting.day}>
                <p>
                  <strong>Day: {setting.day}</strong>
                </p>
                <p>Temp: {setting.temp}</p>
                <p>Humidity: {setting.humidity}</p>
                <p>Temp Off: {setting.tempOff}</p>
                <p>Temp On: {setting.tempOn}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sub-container">
          <div className="links">
            <Link href="/">
              <button className="btn">Cancel</button>
            </Link>
            <Link href="/">
              <button className="btn">Start Curing</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
