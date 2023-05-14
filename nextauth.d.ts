export enum Role {
  user = 'user',
  admin = 'admin',
}

declare module 'next-auth' {
  interface User {
    id?: string;
    email?: string;
  }
  interface Session {
    user?: { email: string } & DefaultSession['user'];
  }
}
