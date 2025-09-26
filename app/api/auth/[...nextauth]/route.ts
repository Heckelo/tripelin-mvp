import NextAuth from "next-auth";
import { authOptions } from "../../../src/server/auth";

const handler = NextAuth(authOptions);

// Exportera HTTP-metoderna i rätt typ
export { handler as GET, handler as POST };
