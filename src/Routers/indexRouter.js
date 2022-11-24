import { Router } from "express";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";

const indexRouter = Router();

indexRouter.use(authRouter);
indexRouter.use(productsRouter);

export default indexRouter;
