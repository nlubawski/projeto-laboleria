import { Router } from "express";
import cakesRouter from "./cake.route.js";
import clientsRouter from "./client.route.js";
import ordersRouter from "./order.route.js";


const router = Router();
router.use(cakesRouter);
router.use(clientsRouter);
router.use(ordersRouter);


export default router;