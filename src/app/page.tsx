'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import '@/styles/globals.css';
import Link from 'next/link';
//import Controller from './controllers/Controller';

// Main app page

const showCuring = () => {
  return (
    <div className="sub-container animated fadeInDown">
      <h3>Now Curing:</h3>
      {/* <Controller controllerId={1} /> */}
    </div>
  );
};

const notCuring = (userId: string | null) => {
  
  return (
    <div>
      {userId ? (
        <div className="sub-container animated fadeInDown">
          <div className="sub-container-detail">
            <p>No salami is being cured at the moment.</p>
            <p>Do some curing!</p>
            <Link href="/controllers">
              <button className="btn">Select Controller</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="sub-container animated fadeInDown">
          <div className="sub-container-detail">
            <p>Get curing!</p>
            <Link href="/controllers/addController">
              <button className="btn">Add New Controller</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <div>
      {/* <div className="card">{notCuring()}</div> */}
      <div className="card">
        {session ? (
          <h2>Welcome to Salami, {session?.user?.name}</h2>
        ) : (
          <h2>Welcome to Salami. Login or create an account.</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
