import { getClientOrdersByIdRepository, saveClientpository } from "../repositories/client.repository.js";
import { getOrderByIdController } from "./order.controller.js";

export async function saveClientController(req, res){
  const {name, address, phone} = req.body;
  try {
    await saveClientpository(name, address, phone)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the client ${error.message}`)
  }
}

export async function getClientOrdersByIdController(req, res) {
    const { id } = req.params;
    try{
      console.log(id)
        const orders = await getClientOrdersByIdRepository(id);   
        console.log("orders", orders)                               
        if(orders.rowCount == 0) return res.sendStatus(404)
        res.send({
            Orders: orders.rows
        }).status(200)
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}