import { Router } from "express";
import cakesRouter from "./cakes.route.js";
import clientsRouter from "./client.route.js";


const router = Router();
router.use(cakesRouter);
router.use(clientsRouter)

export default router;