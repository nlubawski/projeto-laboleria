import { saveClientpository } from "../repositories/clients.repository.js";

export async function saveClientController(req, res){
  const {name, address, phone} = req.body;
  try {
    await saveClientpository(name, address, phone)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(`Error while saving the client ${error.message}`)
  }
}