import Link from "next/link";
import "../../../styles/globals.css";

export default function AddControllerPage() {
  return (
    <div className="sub-container">
      <h3>Add Controller</h3>
      <div className="sub-container-detail">put form here</div>
      <div className="sub-container">
        <div className="sub-container-detail">
          <Link href="/settings">
            <button className="btn">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
