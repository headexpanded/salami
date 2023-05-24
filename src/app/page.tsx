import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getActiveControllerByUserId } from '@/lib/controllers';
import '@/styles/globals.css';
import Link from 'next/link';
//import Controller from './controllers/Controller';

// Main app page

interface Controller {
  id: string;
  name: string;
  location: string;
  ipAddress: string;
  isActive: boolean;
  recipeId: string;
  createdAt: Date | null;
  userId: string;
}

async function fetchActiveControllers(userId: string) {
  const activeControllers = await getActiveControllerByUserId(userId);
  return activeControllers;
}

const showCuring = (session: any, activeControllers: Controller[]) => {
  return (
    <div className="card">
      <h2>Welcome to Salami, {session.user.name}</h2>
      <h3>Now Curing:</h3>
      <ul className="recipe-list">
        {activeControllers.map((controller: Controller) => (
          <li key={controller.id}>
            <div className="sub-container-detail">{controller.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const notCuring = (userId: string) => {
  return (
    <div>
      <div className="sub-container animated fadeInDown">
        <div className="sub-container-detail">
          <p>No salami is being cured at the moment.</p>
          <p>Do some curing!</p>
          <Link href="/controllers">
            <button className="btn">Select a Controller</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <div className="card">
          <h2>Welcome to Salami. Login or create an account.</h2>
        </div>
      </div>
    );
    redirect('/signin?callbackUrl=/');
  }
  const activeControllers = (await fetchActiveControllers(
    session.user.id
  )) as Controller[];
  {
    activeControllers
      ? showCuring(session, activeControllers)
      : notCuring(session.user.id);
  }
};

export default HomePage;
