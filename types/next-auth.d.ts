import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    id?: string;
    jwt?: string;
    user: {
      username?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    jwt: string;
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    jwt?: string;
    username?: string;
  }
}
