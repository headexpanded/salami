import { getServerSession } from "next-auth/next";
import { getControllerByUserId } from "@/lib/controllers";
import Controllers from "./Controllers";
import "@/styles/globals.css";

const ControllersPage = async () => {
  const session = await getServerSession();
  const { controllers } = await getControllerByUserId();
  return (
    <div>
      <h2>Hello {session?.user?.name}</h2>
      <Controllers controllers={controllers} />
    </div>
  );
};

export default ControllersPage;

/* <main>
        <div className="subcontainer">
          <div className="links">
            <Link href="./controllers/addController">
              <button className="btn">Add New Controller</button>
            </Link>
          </div>
        </div>
      </main> */
