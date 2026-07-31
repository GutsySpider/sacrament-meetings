import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getUserByEmail(email: string) {
  const result = await sql`
    SELECT *
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `;

  return result[0] ?? null;
}