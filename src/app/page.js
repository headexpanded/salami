import prisma from "../../lib/prisma";
import "../styles/globals.css";
import LoadingPage from "@/loading";

export default function Page() {
  return (
    <div class="card">
      <div className="sub-container animated fadeInDown">
        <h3>Now Curing:</h3>
        <div className="sub-container-detail">
          <p>Recipe: Oak-Smoked Italian</p>
          <p>Start Date: 2023-04-07 14:35:54</p>
          <p>Req. Temp: 23</p>
          <p>Current Temp: 21.5</p>
          <p>Req. Humidity: 14</p>
          <p>Current Humidity: 16</p>
          <p>Next Change: 2023-04-08 19:00:00</p>
        </div>
      </div>
    </div>
  );
}
