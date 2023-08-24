import { db } from "../database/db.connection.js";

export async function saveClientpository(name, address, phone) {
  try {
      return await db.query(`INSERT INTO clients("name", "address", "phone") VALUES ($1, $2, $3)`, [name, address, phone]);
  } catch (error) {
    throw error
  }
}