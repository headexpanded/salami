import "@/styles/globals.css";

const Users = ({ users }: any) => {
  return (
    <section>
      <div className="card">
        <ul className="recipe-list">
          {users?.map((user: any) => (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Users;
