import "@/styles/globals.css";
import Link from "next/link";

const Chef = ({ chef }) => {
  console.log(chef);
  return (
    <section>
      <div className="card animated fadeInDown">
        <p>{chef?.name}</p>
        <p>{chef?.email}</p>
        <ul className="recipe-list">
          {chef.controllers.length > 0 ? (
            chef.controllers.map((controller) => (
              <li key="controllerId">
                <p>{controller.name}</p>
                <p>{controller.location}</p>
              </li>
            ))
          ) : (
            <Link href="">No controllers</Link>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Chef;
