import { db } from "../database/db.connection.js";

export async function saveOrderRepository(clientId, cakeId, quantity, totalPrice) {
  try {
      return await db.query(`INSERT INTO orders("clientId", "cakeId", "quantity", "totalPrice") VALUES ($1, $2, $3, $4)`, [clientId, cakeId, quantity, totalPrice]);
  } catch (error) {
    throw error
  }
}

