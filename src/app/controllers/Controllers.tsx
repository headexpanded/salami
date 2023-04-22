// Calls all controllers from the API router
// Puts them in individual list items.
import Link from "next/link";
import "@/styles/globals.css";

/* import { useState, useEffect } from "react";
import { NextResponse } from "next/server";
import Link from "next/link";
import CurrentData from "../../../Components/Shared/CurrentData";
 */
interface Controller {
  id: string;
  name: string;
  location: string;
  ipAddress: string;
  isActive: boolean;
  createdAt: Date | null;
}

/* async function fetchControllers(): Promise<Controller[]> {
  const response = await fetch("/api/controllers", { cache: "force-cache" });
  const controllers: Controller[] = await response.json();
  console.log(controllers);
  return controllers;
} */

/* const DATA_SOURCE_URL = "http://localhost:3000/api/controllers";

type ControllerProps = {
  controllerId: string;
}; */

const Controllers = ({ controllers }: any) => {
  // const [controllers, setControllers] = useState<Controller[]>([]);

  /* const handleConnectClick = async (id: string) => {
    try {
      const response = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, isActive: true }),
      });
      if (response.ok) {
        const activeController = await response.json();
        setControllers((prevControllers) => {
          return prevControllers.map((controller) => {
            if (controller.id === activeController.id) {
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
 */
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

  /* useEffect(() => {
    const fetchControllerData = async () => {
      const controllers = await fetchControllers();
      setControllers(controllers);
    };
    fetchControllerData();
  }, []);
 */
  return (
    <section>
      <div className="card">
        <ul className="recipe-list">
          {controllers.length > 0 ? (
            controllers.map((controller:Controller) => (
              <li key={controller.id}>
                <Link href={`/controllers/id`}>
                  <h3>{controller.name}</h3>
                  <p>{controller.location}</p>
                  <p>{controller.ipAddress}</p>
                  {controller.isActive ? (
                    <div className="sub-container-detail">
                      <p>
                        <strong>Active</strong>
                      </p>
                      {/* <button
                        className="btn btn-action btn-warning"
                        onClick={() => handleDisConnectClick(controller.id)}
                      >
                        Disconnect
                      </button> */}
                    </div>
                  ) : (
                    <div className="sub-container-detail">
                      <p>Not active</p>
                      {/* <button
                        className="btn btn-action"
                        onClick={() => handleConnectClick(controller.id)}
                      >
                        Connect
                      </button> */}
                    </div>
                  )}
                </Link>
                {controller.isActive ? (
                  <div>
                    {/* <CurrentData controllerId={controller.id} recipeId={"1"} /> */}
                  </div>
                ) : (
                  <div></div>
                )}
              </li>
            ))
          ) : (
            <div>
              <p>You have no controllers in the database.</p>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Controllers;
