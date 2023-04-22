import "@/styles/globals.css";
import AuthContext from "@/app/AuthContext";

export default function AuthLayout({ children }) {
  return (
    <AuthContext>
      <div>{children}</div>
    </AuthContext>
  );
}
