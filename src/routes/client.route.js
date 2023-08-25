import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { clientSchema } from "../schemas/client.schema.js";
import { getClientOrdersByIdController, saveClientController } from "../controllers/client.controller.js";

const clientsRouter = Router()

clientsRouter.post("/clients", validateSchema(clientSchema), saveClientController);
clientsRouter.get("/clients/:id/orders", getClientOrdersByIdController)

export default clientsRouter;