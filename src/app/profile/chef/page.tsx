
import { FaAngleRight, FaBeer, FaCrown } from "react-icons/fa";
import { PrismaClient } from "@prisma/client";
import "../../../styles/globals.css";

const prisma = new PrismaClient();

async function fetchChefs() {
  const chefs = await prisma.chef.findMany();
  return chefs;
}

export default async function ChefsPage ()  {
  const chefs = await fetchChefs();
  return (
    <>
      <div className="sub-container">
        <h2>Chef Profile</h2>

        {chefs.map((chef) => (
          <div key={chef.id}>
            <div className="sub-container-detail">
              <p>Name: {chef.name}</p>
              <p>Email: {chef.email}</p>
              <p>Recipes: </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
