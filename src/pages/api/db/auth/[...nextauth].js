import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  theme: {
    logo: "/salami-02.png",
    brandColor: "#333",
  },
});