// Returns current fridge data from remote controller
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type targetSettings = {
  temp: number;
  humidity: number;
}


export async function GET(request: Request, recipeId: string) {
  try {
    const targetSettings = await prisma.recipeSettings.findFirst({
      where: { recipeId, day: { equals: '3' } },
    }) as targetSettings;
    return NextResponse.json([targetSettings]);
  } catch (error: unknown) {
    console.log(error);
    throw Error(`Error fetching target data: + ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
