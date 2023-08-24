import { Router } from "express";
import { cakesSchema } from "../schemas/cakes.schema.js";
import { saveCakeController } from "../controllers/cakes.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const cakesRouter = Router()

cakesRouter.post("/cakes", validateSchema(cakesSchema), saveCakeController);

export default cakesRouter;