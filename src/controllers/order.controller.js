import { getCakeByIdRepository } from "../repositories/cake.repository.js";
import { getClientByIdRepository } from "../repositories/client.repository.js";
import { saveOrderRepository, getOrderRepository, getOrderByIdRepository } from "../repositories/order.repository.js";

export async function saveOrderController(req, res){
  const {clientId, cakeId, quantity, totalPrice} = req.body;
  try {
    await saveOrderRepository(clientId, cakeId, quantity, totalPrice)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the order ${error.message}`)
  }
}

export async function getOrderController(req, res){
  const {date} = req.query;
  try {
    const orders = await getOrderRepository(date)
    if (!orders.rowCount) return res.status(404).send([])
    console.log(orders)
    const formattedOrders = orders.rows.map((data) => {
      return {
          "client": {
              "id": data.clientsid,
              "name": data.clientName,
              "address": data.address,
              "phone": data.phone
          },
          "cake": {
              "id": data.cakesid,
              "name": data.cakeName,
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

export async function getOrderByIdController(req, res){
  const { id } = req.params;
  try{
    const ordersData = await getOrderByIdRepository(id);
    if(ordersData.rowCount == 0) return res.sendStatus(404);
    
    const [orders] = ordersData.rows;

    const cakeData = await getCakeByIdRepository(orders.cakeid);
    const clientData = await getClientByIdRepository(orders.clientid);

    const order = {
      client: clientData.rows,
      cake: cakeData.rows,
      createdAt: orders.createdAt,
      totalPrice : orders.totalprice,
      quantity:  orders.quantity,
    }
    res.send(order).status(200)

    } catch (error) {
      res.status(500).send(`Error while get order by id ${error.message}`)
    }
}