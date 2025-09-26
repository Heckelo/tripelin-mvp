import NextAuth from "next-auth";
import { authOptions } from "../../../../src/server/auth";

// Tydlig export i stället för "export { handler as GET, ... }"
const handler = NextAuth(authOptions);

// Undvik TS-tjafs: NextAuth returnerar en kompatibel RequestHandler
// men TS kan inte alltid härleda detta korrekt i app router.
export const GET = handler;
export const POST = handler;
