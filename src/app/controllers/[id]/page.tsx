'use client'

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
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

const CONTROLLER_DATA_SOURCE_URL = '/api/controllers';

const handleDeleteClick = (controllerId: string) => {
  alert("Do you really want to delete this controller?")
}

async function fetchController(controllerId: string) {
  try {
    const response = await fetch(CONTROLLER_DATA_SOURCE_URL, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        controllerId: `${controllerId}`,
      },
    });
    if (!response.ok) {
      throw new Error('Error fetching controller: ${response.statusText}');
    }
    const controller: Controller = await response.json();
    return controller
    /* if (!controller) {
      throw new Error('Controller not found');
    }
    return controller; */
  } catch (error) {
    console.log(error)
    return null;
  }
}

const ControllerPage = async ({ params: { id } }: ControllerPageProps) => {
  const { data: session } = useSession({
    required: true,
  });
  //const session = await getServerSession(authOptions);
  if (!session) {
    //redirect('/signin?callbackUrl=/controllers');
  }
  const controllerId = id;
  const controller = await fetchController(controllerId);
  console.log(controller);

  const controllerContent = controller?.isActive ? (
    <>
      <h2>{controller?.name}</h2>
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
      <h2>{controller?.name}</h2>
      <h3>{controller?.location}</h3>

      <button
        className="btn btn-action"
        // onClick={() => handleConnectClick(controller.id)}
      >
        Activate
      </button>
      <div>
        <button
          className="btn btn-action"
          onClick={() => handleDeleteClick(controller!.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return React.createElement('div', { className: 'card' }, controllerContent);
};
export default ControllerPage;
