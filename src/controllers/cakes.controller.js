import { saveCakeRepository, getCakeByNameRepository } from "../repositories/cakes.repository";

export async function saveCakeController(req, res){
  const {name, price, image, description} = req.body;
  try {

    const hasTheSameName = (await getCakeByNameRepository(name)).rowCount
    if(hasTheSameName > 0) return res.sendSatus(409)
    await saveCakeRepository(name, price, image, description)
    res.sendSatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the cake ${err.message}`)
  }
}