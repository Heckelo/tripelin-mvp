import NextAuth from "next-auth";
import { authOptions } from "../../../../src/server/auth";

export const { handlers: { GET, POST } } = NextAuth(authOptions);
