import { getChefs } from "@/lib/chefs";
import Chefs from "./chefs";
import "@/styles/globals.css";
const ChefsPage = async () => {
  const { chefs } = await getChefs();
  return <Chefs chefs={chefs} />;
};

export default ChefsPage;
