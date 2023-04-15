// Calls all controllers from the API router
// Puts them in individual list items.
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CurrentData from "./CurrentData";

interface Controller {
  id: number;
  name: string;
  location: string;
  publicIpAddress: string;
  isActive: boolean;
  createdAt: Date | null;
}

async function fetchControllers(): Promise<Controller[]> {
  const response = await fetch("/api/controllers");
  const controllers: Controller[] = await response.json();
  return controllers;
}

const DATA_SOURCE_URL = "http://localhost:3000/api/controllers";

const Controller = () => {
  const [controllers, setControllers] = useState<Controller[]>([]);

  const handleConnectClick = async (id: number) => {
    try {
      const response = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, isActive: true }),
      });
      if (response.ok) {
        const updatedController = await response.json();
        setControllers((prevControllers) => {
          return prevControllers.map((controller) => {
            if (controller.id === updatedController.id) {
              return { ...controller, isActive: true };
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
  };

  const handleDisConnectClick = async (id: number) => {
    try {
      const response = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, isActive: false }),
      });
      if (response.ok) {
        const updatedController = await response.json();
        setControllers((prevControllers) => {
          return prevControllers.map((controller) => {
            if (controller.id === updatedController.id) {
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
  };

  useEffect(() => {
    const fetchControllerData = async () => {
      const controllers = await fetchControllers();
      setControllers(controllers);
    };

    fetchControllerData();
  }, []);

  return (
    <ul className="recipe-list">
      {controllers.map((controller) => (
        <li key={controller.id}>
          <Link href={`/controllers`}>
            <h3>{controller.name}</h3>
            <p>{controller.location}</p>
            <p>{controller.publicIpAddress}</p>
            {controller.isActive ? (
              <div className="sub-container-detail">
                <p>
                  <strong>Active</strong>
                </p>
                <button
                  className="btn btn-action btn-warning"
                  onClick={() => handleDisConnectClick(controller.id)}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="sub-container-detail">
                <p>Not active</p>{" "}
                <button
                  className="btn btn-action"
                  onClick={() => handleConnectClick(controller.id)}
                >
                  Connect
                </button>
              </div>
            )}
          </Link>
          {controller.isActive ? (
            <div>
              <CurrentData controllerId={controller.id} />
            </div>
          ) : (
            <div></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Controller;
