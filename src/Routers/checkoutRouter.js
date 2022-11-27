import { Router } from "express";
import { createOrder, clearCart } from "../Controllers/checkoutController.js";
import { authRoutesValidation } from "../Middlewares/validateAuthMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(authRoutesValidation);

checkoutRouter.post("/orders", createOrder);
checkoutRouter.delete("/orders", clearCart);

export default checkoutRouter;
