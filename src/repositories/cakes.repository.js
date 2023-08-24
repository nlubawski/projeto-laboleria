import { db } from "../database/db.connection";

export async function saveCakeRepository(name, price, image, description) {
  try {
      return await db.query(`INSERT INTO cakes("name", "price", "image", "description") VALUES ($1, $2, $3, $4)`, [name, price, image, description]);
  } catch (error) {
    throw error
  }
}

export async function getCakeByNameRepository(name){
  try {
    return await db.query(`SELECT * FROM cakes WHERE name=$1`, [name])
  } catch (error) {
    throw error
  }
}