import NextAuth, { Account, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithCredential } from "@/services/auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Sign in with Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials == null) return null;
        try {
          const response = await signInWithCredential({
            email: credentials.email,
            password: credentials.password,
          });

          if (response) {
            return {
              ...response.user,
              jwt: response.jwt,
            };
          } else {
            return null;
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("An unexpected error occurred");
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user.username = token.username;
      return Promise.resolve(session);
    },
    jwt: async ({
      token,
      user,
      account,
    }: {
      token: JWT;
      user: User;
      account: Account | null;
    }) => {
      if (user && account?.provider === "credentials") {
        token.id = user.id;
        token.jwt = user.jwt;
        token.username = user.username;
      }
      return Promise.resolve(token);
    },
  },
  pages: {
    signIn: "/account/login",
  },
});

export { handler as GET, handler as POST };
