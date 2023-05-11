import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    
  },
  pages: {},
  callbacks: {
    /* async jwt({ token, account, profile, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.email = profile.email;
      }
      return token;
    }, */
    async session({ session, user }) {
      
      session.user.id = user.id;
      session.email = user.email;
      return session;
    },
  },
  theme: {
    colorScheme: "light",
    brandColor: "#dd0404",
    logo: "/salami-02.png",
  },
};

export default NextAuth(authOptions);
