import { db } from "../database/db.connection.js";

export async function saveClientpository(name, address, phone) {
  try {
      return await db.query(`INSERT INTO clients("name", "address", "phone") VALUES ($1, $2, $3)`, [name, address, phone]);
  } catch (error) {
    throw error
  }
}

export async function getClientByIdRepository(id){
  try {
    return db.query('SELECT * FROM orders WHERE id = $1', [id]);
  } catch (error) {
    throw error
  }
}