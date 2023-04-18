import "@/styles/globals.css";

const Chefs = async ({ chefs }) => {
  return (
    <section>
      <div className="card">
        <ul className="recipe-list">
          {chefs?.map((chef) => (
            <li key={chef.id}>
              <p>{chef.name}</p>
              <p>{chef.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Chefs;
