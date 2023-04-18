
import "@/styles/globals.css";

const Chef = ({chef}:any) => {
  return (<section>

    <div className="card">
      <p>{chef?.name}</p>
      <p>{chef?.email}</p>
    </div>

  </section>)
}
  
export default Chef;
