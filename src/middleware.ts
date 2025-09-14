import { auth } from "@/auth";

const protectedRoutes = ["/register", "/events/register"];

export default auth((req) => {
  const path = req.nextUrl.pathname;

  // check if the path starts with any protected route
  const isProtected = protectedRoutes.some(
    (route) => path === route || path.startsWith(route + "/")
  );

  if (!req.auth && isProtected) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
