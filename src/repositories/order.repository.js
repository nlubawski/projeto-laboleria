import { db } from "../database/db.connection.js";

export async function saveOrderRepository(clientId, cakeId, quantity, totalPrice) {
  try {
      return await db.query(`INSERT INTO orders(clientId, cakeId, quantity, createdAt , totalPrice) VALUES ($1, $2, $3,  CURRENT_TIMESTAMP,$4)`, [clientId, cakeId, quantity, totalPrice]);
  } catch (error) {
    throw error
  }
}

export async function getOrderRepository(date) {
  try {
    let query = `SELECT orders.id, orders.clientId, orders.cakeId, orders.quantity, TO_CHAR(orders.createdAt, 'YYYY-MM-DD HH24:MI') AS tempo,
    orders.totalPrice, clients.id AS clientsid, clients.name AS "clientName",
    clients.address, clients.phone, cakes.id AS cakesid, cakes.name AS "cakeName", cakes.price, cakes.image, cakes.description
    FROM orders
    JOIN clients ON orders.clientId = clients.id
    JOIN cakes ON orders.cakeId = cakes.id
    WHERE 1=1;
    `
    let queryComplementar = `;`
    const valor = [];
    if (date) {
      valor.push(date)
      queryComplementar = `AND TO_CHAR(orders.createdAt, 'YYYY-MM-DD') = $${valor.length};`
    }
    return db.query(query + queryComplementar, valor)
  } catch (error) {
    throw error
  }
}