import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },  
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
    }
  }),
  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001", 
    "https://neuralife.onrender.com",
    "https://www.neuralife.onrender.com"
  ],
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://neuralife.onrender.com", 
      "https://www.neuralife.onrender.com"
    ],
    credentials: true,
  },
});
