
import "@styles/globals.css";
import prisma from "@lib/prisma";



async function fetchChefs() {
  const chefs = await prisma.chef.findMany();
  return chefs;
}

export default async function ChefsPage() {
  const chefs = await fetchChefs();
  return (
    <>
      <div className="sub-container animated fadeInDown">
        <h3>Your Profile</h3>
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
}
