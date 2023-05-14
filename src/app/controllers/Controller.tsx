// Calls all of a user's controllers from the db

import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import type { AuthOptions } from 'next-auth';
import { getControllerByUserId } from '@/lib/controllers';
import Link from 'next/link';

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

async function fetchControllers(userId: string){
  const controllers = await getControllerByUserId(userId);
  return controllers;
}

const Controller = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/signin?callbackUrl=/controllers');
  }
  const controllers = await fetchControllers(session?.user?.id);
  
  return (
    <ul className="recipe-list">
      {controllers.controllers?.map((controller) => (
        <li key={controller.id}>
          <Link
            href={{
              pathname: `/controllers/${controller.id}`,
              query: { name: `${controller.name}` },
            }}
          >
            <h3>{controller.name}</h3>
            <p>{controller.location}</p>
            {controller.isActive ? <p style = {{color: 'green'}}>Active</p> : <p>Not active</p>}
          </Link>
        </li>
      ))}
    </ul>
  );

  /*  const handleDisConnectClick = async (id: string) => {
    try {
      const response = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, isActive: false }),
      });
      if (response.ok) {
        const activeController = await response.json();
        setControllers((prevControllers) => {
          return prevControllers.map((controller) => {
            if (controller.id === activeController.id) {
              return { ...controller, isActive: false };
            } else {
              return controller;
            }
          });
        });
      } else {
        console.log(response);
        throw new Error("Error updating controller: ${response.statusText}");
      }
    } catch (error: unknown) {
      console.error(error);
    }
  }; */

  
};

export default Controller;
