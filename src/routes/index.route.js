import { Router } from "express";
import cakesRouter from "./cakes.route";


const router = Router();
router.use(cakesRouter);

export default router;