import { getControllerById } from "@/lib/controllers";
import Link from "next/link";
import CurrentData from "./CurrentData";

const ControllerPage = async ({ params }) => {
  const controllerId = params.controllerId;
  const { controller } = await getControllerById(controllerId);
  console.log(controller)
  return (
    <div className="card">
      <h3>Current Data</h3>
      <CurrentData
        controllerId={controllerId}
        recipeId={"1"}
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
