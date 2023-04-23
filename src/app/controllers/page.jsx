import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getControllerByUserId } from "@/lib/controllers";
import Controllers from "./Controllers";
import "@/styles/globals.css";



const ControllersPage = async () => {
  const session = await getServerSession(authOptions);
  const { controllers } = await getControllerByUserId();
  return (
    <main>
      <div>
        <h2>Hello {session?.user?.name}</h2>
        <Controllers controllers={controllers} />
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </main>
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
