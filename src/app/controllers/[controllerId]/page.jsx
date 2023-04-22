import { getControllerById } from "@/lib/controllers";
import Link from "next/link";
import CurrentData from "./CurrentData";

const ControllerPage = async ({ params }) => {
  const controllerId = params.controllerId;
  const { controller } = await getControllerById(controllerId);
  return (
    <div className="card">
      <h3>Current Data</h3>
      <CurrentData
        controllerId={controller.controllerId}
        recipeId={controller.recipeId}
      />
      <div className="links">
        <Link href="/controllers" className="btn">
          Close
        </Link>
      </div>
    </div>
  );
};
export default ControllerPage;
