import { Router } from "express";
import { orderSchema } from "../schemas/order.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { saveOrderController, getOrderController, getOrderByIdController } from "../controllers/order.controller.js";

const ordersRouter = Router()

ordersRouter.post("/orders", validateSchema(orderSchema), saveOrderController);
ordersRouter.get("/orders", getOrderController)
ordersRouter.get("/orders/:id", getOrderByIdController)

export default ordersRouter;