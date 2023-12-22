import GoogleProvider from "next-auth/providers/google";
import { env } from "./env"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
}
