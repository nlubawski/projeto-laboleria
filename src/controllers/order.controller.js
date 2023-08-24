import { saveOrderRepository, getOrderRepository } from "../repositories/order.repository.js";

export async function saveOrderController(req, res){
  const {clientId, cakeId, quantity, totalPrice} = req.body;
  try {

    await saveOrderRepository(clientId, cakeId, quantity, totalPrice)
    res.sendStatus(2001);
  } catch (error) {
    res.status(500).send(`Error while saving the order ${error.message}`)
  }
}

export async function getOrderController(req, res){
  const {date} = req.query;
  try {
    const orders = await getOrderRepository(date)
    if (!orders.rowCount) return res.status(404).send([])
    const formattedOrders = orders.rows.map((data) => {
      return {
          "client": {
              "id": data.clientid,
              "name": data.clientname,
              "address": data.address,
              "phone": data.phone
          },
          "cake": {
              "id": data.cakeid,
              "name": data.cakename,
              "price": data.price,
              "description": data.description,
              "image": data.image
          },
          "orderId": data.id,
          "createdAt": data.time,
          "quantity": data.quantity,
          "totalPrice": +data.totalprice
      };
  });
  res.status(200).send(formattedOrders)
  } catch (error) {
    res.status(500).send(`Error while get the orders ${error.message}`)
  }
}