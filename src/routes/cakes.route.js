import { Router } from "express";
import { cakeSchema } from "../schemas/cake.schema.js";
import { saveCakeController } from "../controllers/cakes.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const cakesRouter = Router()

cakesRouter.post("/cakes", validateSchema(cakeSchema), saveCakeController);

export default cakesRouter;