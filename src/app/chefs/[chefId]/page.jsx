import { getChefById, getChefs } from "@/lib/chefs";
import Chef from "./chef";
import "@/styles/globals.css";

export async function generateStaticParams() {
  const { chefs } = await getChefs();
  return chefs.map((chef) => ({
    chefId: chef.id.toString(),
  }));
} 

const ChefPage = async ({ params }) => {
  const chefId = Number(params.chefId);
  const { chef } = await getChefById(chefId);
  return <Chef chef={chef} />;
};

export default ChefPage;
