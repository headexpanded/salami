// API route for fetching all controllers

import prisma from "@lib/prisma"

export async function GET(request: Request) {
  try {
    const controllers = await prisma.controller.findMany();
    return new Response(JSON.stringify(controllers));
  } catch (error: unknown) {
    throw new Error(`Error fetching recipe: + ${error}`);
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
    return new Response(JSON.stringify(updatedController));
  } catch (error: unknown) {
    throw new Error(`Error updating controller: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

