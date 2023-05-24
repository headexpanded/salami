// API routes for managing controllers
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse, NextRequest } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(userId: string | any) {
  try {
    const controllers = await prisma.controller.findMany({ where: { userId } });
    console.log(controllers);
    return NextResponse.json({ controllers }, { status: 200 });
  } catch (error: unknown) {
    throw new Error(`Error fetching controllers: + ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(request: NextRequest) {
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

export async function POST(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        status: 401,
        message: 'Unauthorized: you are not logged in.',
      })
    );
  }

  type Controller = {
    name: string;
    location: string;
    ipAddress: string;
    isActive: boolean;
    port: string;
    recipeId: string;
    userId: string;
  };

  const {
    name,
    location,
    ipAddress,
    isActive,
    port,
    recipeId,
    userId,
  }: Controller = await request.json();
  try {
    const newController = await prisma.controller.create({
      data: { name, location, ipAddress, isActive, port, recipeId, userId },
    });
    return NextResponse.json({ newController }, { status: 201 });
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`Error creating controller: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        status: 401,
        message: 'Unauthorized: you are not logged in.',
      })
    );
  }
  const { id } = await request.json();
  try {
    const deletedController = await prisma.controller.delete({
      where: { id },
    });
    return NextResponse.json({ deletedController }, { status: 200 });
  } catch (error: unknown) {
    throw new Error(`Error deleting controller: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}
