// API routes for managing controllers
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    
    const controllers = await prisma.controller.findMany();
    return NextResponse.json(controllers);
  } catch (error: unknown) {
    throw new Error(`Error fetching controllers: + ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  const { id, isActive } = await request.json();
  try {
    const updatedController = await prisma.controller.update({
      where: { id },
      data: { isActive },
    });
    return NextResponse.json(updatedController);
  } catch (error: unknown) {
    throw new Error(`Error updating controller: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}
