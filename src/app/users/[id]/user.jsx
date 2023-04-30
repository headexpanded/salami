import "@/styles/globals.css";
import Link from "next/link";

const User = ({ user }) => {
  console.log(user);
  return (
    <section>
      <div className="card animated fadeInDown">
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <ul className="recipe-list">
          {user?.controllers?.length > 0 ? (
            user.controllers.map((controller) => (
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

export default User;
