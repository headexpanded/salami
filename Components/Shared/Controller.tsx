// Calls all controllers from the API router
// Puts them in individual list items.


import Link from "next/link";
import CurrentData from "./CurrentData";

interface Controller {
  id: number | null;
  name: string;
  description: string;
  publicIpAddress: string;
  isActive: boolean;
  createdAt: Date | null;
}

async function fetchControllers(): Promise<Controller[]> {
  const response = await fetch("http://localhost:3000/api/controllers");
  const controllers: Controller[] = await response.json();
  return controllers;
}

const Controller = async () => {
  const controllers = await fetchControllers();
  return (
    <ul className="recipe-list">
      {controllers.map((controller) => (
        <li key={controller.id}>
          <Link href={`/controllers`}>
            <h3>{controller.name}</h3>
            <p>{controller.description}</p>
            <p>{controller.publicIpAddress}</p>
            {controller.isActive ? (
              <p>
                <strong>Active</strong>
              </p>
            ) : (
              <div className="sub-container-detail">
                <p>Not active</p>{" "}
                <button className="btn btn-action">Activate</button>
              </div>
            )}
          </Link>
          {controller.isActive ? (
            <div>
              <CurrentData controllerId={1} />
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
