import { Router } from "express";
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import checkoutRouter from "./checkoutRouter.js";
import productsRouter from "./productsRouter.js";

const indexRouter = Router();

indexRouter.use(authRouter);
indexRouter.use(productsRouter);
indexRouter.use(cartRouter);
indexRouter.use(checkoutRouter);

export default indexRouter;
