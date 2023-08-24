import { saveCakeRepository, getCakeByNameRepository } from "../repositories/cakes.repository.js";

export async function saveCakeController(req, res){
  const {name, price, image, description} = req.body;
  try {
    const hasTheSameName = await getCakeByNameRepository(name)
    if(hasTheSameName.rows.length !== 0) return res.sendStatus(409)
    await saveCakeRepository(name, price, image, description)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the cake ${error.message}`)
  }
}