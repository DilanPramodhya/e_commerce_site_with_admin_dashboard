import { authMiddleware } from "@clerk/nextjs/server";
import path from "path";

export default authMiddleware({
  publicRoutes: ["/:path*"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
