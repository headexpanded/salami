

import Link from "next/link";
import CurrentData from "../../../../Components/Shared/CurrentData";

type ActiveControllerPageProps = {
  params: {
    controllerId: number;
  };
};

const ActiveControllerPage = ({ params: { controllerId } }: ActiveControllerPageProps) => {
  return (
    <div className="card">
      <h3>Current Data</h3>
      <CurrentData controllerId={controllerId} recipeId={1} />
      <div className="links">
        <Link href="/controllers" className="btn">
          Close
        </Link>
      </div>
    </div>
  );
};
export default ActiveControllerPage;
