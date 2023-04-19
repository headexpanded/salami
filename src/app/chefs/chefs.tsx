import "@/styles/globals.css";

const Chefs = ({ chefs }: any) => {
  return (
    <section>
      <div className="card">
        <ul className="recipe-list">
          {chefs?.map((chef: any) => (
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
