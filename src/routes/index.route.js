import { Router } from "express";
import cakesRouter from "./cakes.route.js";


const router = Router();
router.use(cakesRouter);

export default router;