import Link from 'next/link';
import CurrentData from './CurrentData';

type ControllerPageProps = {
  params: {
    id: string;
  };
};

const ControllerPage = ({ params: { id } }: ControllerPageProps) => {
  const controllerId = id;

  return (
    <div className="card">
      <h2></h2>
      <h3>Current Data</h3>
      {/* @ts-expect-error Async Server Component*/}
      <CurrentData controllerId={controllerId} recipeId="1" />
      <div className="links">
        <Link href="/controllers" className="btn">
          Close
        </Link>
      </div>
    </div>
  );
};
export default ControllerPage;
