import { saveOrderRepository } from "../repositories/order.repository.js";

export async function saveOrderController(req, res){
  const {clientId, cakeId, quantity, totalPrice} = req.body;
  try {

    await saveOrderRepository(clientId, cakeId, quantity, totalPrice)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the order ${error.message}`)
  }
}