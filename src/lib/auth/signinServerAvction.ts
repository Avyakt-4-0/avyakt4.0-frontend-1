"use server";

import { signIn } from "@/auth";

export const handleSignIn = async () => {
  try {
    await signIn("google", {
      redirect: true,
      redirectTo: "/",
    });
  } catch (error) {
    if ((error as Error).name === "CredentialsSignin") {
      return { error: "Invalid credentials" };
    }
    throw error;
  }
};
