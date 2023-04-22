// API routes for managing controllers
import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const controllers = await prisma.controller.findMany();
    console.log(controllers);
    return NextResponse.json({ controllers }, { status: 200 });
  } catch (error: unknown) {
    throw new Error(`Error fetching controllers: + ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(request: Request) {
  const { id, isActive } = await request.json();
  try {
    const activeController = await prisma.controller.update({
      where: { id },
      data: { isActive },
    });
    return NextResponse.json({ activeController }, { status: 201 });
  } catch (error: unknown) {
    throw new Error(`Error updating controller: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  type Controller = {
    name: string;
    location: string;
    ipAddress: string;
    isActive: boolean;
    port: string;
    userId: string;
  }
  const { name, location, ipAddress, isActive, port, userId }:Controller = await request.json();
  try {
    const newController = await prisma.controller.create({
      data: { name, location, ipAddress, isActive, port, userId },
    });
    return NextResponse.json({ newController }, { status: 201 });
  } catch (error: unknown) {
    throw new Error(`Error creating controller: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}
