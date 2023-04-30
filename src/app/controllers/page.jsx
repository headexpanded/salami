import Link from 'next/link';
import '@/styles/globals.css';

const ControllersPage = async () => {
  return (
    <main>
      <div className="sub-container">
        <div className="links">
          <Link href="./controllers/addController">
            <button className="btn">Add New Controller</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ControllersPage;
