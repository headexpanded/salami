import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface RecipeSettings {
  day: string;
  temp: number;
  humidity: number;
  tempOff: number;
  tempOn: number;
  hours: number;
  recipeId: number;
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

type RecipeSettingsProps = {
  recipeId: number,
};

async function fetchRecipeSettings(recipeId: number) {
  try {
    const recipeSettings = await prisma.recipeSettings.findMany({
      where: { recipeId: Number(recipeId) },
    } as RecipeSettingsInclude);
    return recipeSettings;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching recipe settings: + ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export const RecipeSettings = async ({recipeId}: RecipeSettingsProps) => {
  const recipeSettings = await fetchRecipeSettings(recipeId);
  

  return (
    <div>
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
    
  );
};
