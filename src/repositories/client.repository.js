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

export async function getClientOrdersByIdRepository(id){
  try {
      return await db.query(` 
        SELECT orders.id, orders.quantity, orders.totalprice, orders.createdAt, cakes.name
        FROM orders as orders
        JOIN clients as client ON orders.clientid =  $1
        JOIN cakes as cakes ON cakes.id = orders.cakeid
        GROUP BY orders.id, cakes.id 
        ORDER BY orders.id, cakes.id ASC `, [id]);
  } catch (error) {
        throw error
  }
}
