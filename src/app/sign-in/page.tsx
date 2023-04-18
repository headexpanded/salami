import { SignIn } from "@clerk/nextjs/app-beta";
import "@/styles/globals.css";

const SignInPage = async ({ searchParams }) => {
  const { redirectUrl } = searchParams;

  return (
    <section className="container">
      <div className="container">
        <div className="sub-container">
          <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl || "/"} />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
