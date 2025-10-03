// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
// You can specify any property from the node-postgres connection options
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

const result = await db.execute("select 1");
console.log(result);

export { db };
export type { InferModel } from "drizzle-orm";
