import { getChefById } from "@/lib/chefs";
import Chef from "./chef";
import "@/styles/globals.css";

const ChefPage = async ({ params }) => {
  const chefId = Number(params.chefId);
  const { chef } = await getChefById(chefId);
  return <Chef chef={chef} />;
};

export default ChefPage;
