import "@/styles/globals.css";
import AuthContext from "@/app/AuthContext";
import Provider from '@Components/Shared/Provider';

export default function AuthLayout({ children }) {
  return (
    <Provider>
      <div>{children}</div>
    </Provider>
  );
}
