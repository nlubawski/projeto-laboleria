import { db } from "../database/db.connection.js";

export async function saveOrderRepository(clientId, cakeId, quantity, totalPrice) {
  try {
      return await db.query(`INSERT INTO orders("clientId", "cakeId", "quantity", "createdAt" , "totalPrice") VALUES ($1, $2, $3,  CURRENT_TIMESTAMP,$4)`, [clientId, cakeId, quantity, totalPrice]);
  } catch (error) {
    throw error
  }
}

export function getOrderRepository(date) {
    const query = `
      SELECT
        orders.id, orders.clientId, orders.cakeId, orders.quantity, TO_CHAR(orders.createdAt, 'YYYY-MM-DD HH24:MI') AS "time",
        orders.totalPrice, clients.name AS "clientName", clients.address, clients.phone, cakes.name AS "cakeName",
        cakes.price, cakes.image, cakes.description
      FROM orders
      JOIN clients ON orders.clientId = clients.id
      JOIN cakes ON orders.cakeId = cakes.id;
      `;
  
    const queryParams = [];
    let queryComplement = '';

    if (date) {
        queryParams.push(date);
        queryComplement = ` AND TO_CHAR(orders.createdAt, 'YYYY-MM-DD') = $${queryParams.length}`;
    }

    return db.query(query + queryComplement, queryParams);
}