import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const emailRegex =
        /^[0-9]{2}[a-z]{3}[0-9]{3}\.[a-z]+@[a-z]+\.[a-z]{2,}$/i;
      if (user.email && emailRegex.test(user.email)) {
        return true; // Allow sign-in
      } else {
        // Redirect to the sign-in page with an error message
        throw new Error("Please use your student email to login in.");
      }
    },
  },
  pages: {
    error: "/autherror",
  },
});
