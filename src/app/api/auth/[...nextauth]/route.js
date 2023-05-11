import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  session: {},
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.email = user.email;
      return session;
    },
  },
  theme: {
    brandColor: '#dd0404',
    logo: '/salami-02.png',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
