import { getUsers } from "@/lib/users"
import Users from "./users";
import "@/styles/globals.css";

const UsersPage = async () => {
  const { users } = await getUsers();
  return <Users users={users} />;
};

export default UsersPage;
