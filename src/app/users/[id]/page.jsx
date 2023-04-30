import { getUserById, getUsers } from "@/lib/users";
import User from "./user";
import "@/styles/globals.css";

export async function generateStaticParams() {
  const { users } = await getUsers();
  return users.map((user) => ({
    userId: user.id,
  }));
}

const UserPage = async ({ params }) => {
  const userId = params.userId;
  const { user } = await getUserById(userId);
  return <User user={user} />;
};

export default UserPage;
