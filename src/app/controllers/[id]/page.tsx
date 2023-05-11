import React from 'react';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import Link from 'next/link';
import { getControllerById } from '@/lib/controllers';
import CurrentData from './CurrentData';

type ControllerPageProps = {
  params: {
    id: string;
  };
};

interface Controller {
  id: string;
  name: string;
  location: string;
  ipAddress: string;
  isActive: boolean;
  recipeId: string;
  createdAt: Date | null;
  userId: string;
}

async function fetchController(controllerId: string) {
  const controller = await getControllerById(controllerId);
  if (!controller) {
    throw new Error('Controller not found');
  }
  return controller;
}

const ControllerPage = async ({ params: { id } }: ControllerPageProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/signin?callbackUrl=/controllers');
  }
  const controllerId = id;
  const controller = await fetchController(controllerId);
  console.log(controller);

  const controllerContent = controller.controller?.isActive ? (
    <>
      <h2>{controller?.controller?.name}</h2>
      <h3>Current Data</h3>
      {/* @ts-expect-error Async Server Component*/}
      <CurrentData controllerId={controllerId} recipeId="1" />

      <div className="links">
        <Link href="/controllers" className="btn">
          Close
        </Link>
      </div>
    </>
  ) : (
    <div>
        <h2>{controller?.controller?.name}</h2>
        <h3>{controller?.controller?.location}</h3>

      <button
        className="btn btn-action"
        // onClick={() => handleConnectClick(controller.id)}
      >
        Activate
      </button>
    </div>
  );

  return React.createElement('div', { className: 'card' }, controllerContent);
};
export default ControllerPage;
