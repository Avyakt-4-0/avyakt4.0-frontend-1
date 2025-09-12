import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@giet\.edu$/i;
      if (user.email && emailRegex.test(user.email)) {
        return true;
      } else {
        throw new Error("Please use your student email to login in.");
      }
    },
  },
  pages: {
    error: "/autherror",
  },
});
