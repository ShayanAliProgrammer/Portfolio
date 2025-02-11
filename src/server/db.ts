import { type Client, createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = (adapter: PrismaLibSQL) => {

  return new PrismaClient({
    log:
    env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],

    adapter
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
  libsql: Client | undefined;
  adapter: PrismaLibSQL | undefined;
};

const libsql = globalForPrisma.libsql ?? createClient({
  url: `${env.DATABASE_URL.replace('../', '')}`,

  syncUrl: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN,
})

const adapter = globalForPrisma.adapter ?? new PrismaLibSQL(libsql);

export const db = globalForPrisma.prisma ?? createPrismaClient(adapter);

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
if (env.NODE_ENV !== "production") globalForPrisma.libsql = libsql;
if (env.NODE_ENV !== "production") globalForPrisma.adapter = adapter;
