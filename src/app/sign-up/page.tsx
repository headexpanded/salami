import { SignUp } from "@clerk/nextjs/app-beta";

const SignupPage = async () => {
  return (
    <section className="container">
      <div className="sub-container">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </div>
    </section>
  );
};
export default SignupPage;
