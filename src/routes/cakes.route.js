import { Router } from "express";
import { cakesSchema } from "../schemas/cakes.schema";
import { saveCakeController } from "../controllers/cakes.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware"


const cakesRouter = Router()

cakesRouter.post("/cakes", validateSchema(cakesSchema), saveCakeController);

export default cakesRouter;