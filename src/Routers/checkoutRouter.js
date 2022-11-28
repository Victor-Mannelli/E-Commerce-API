import { Router } from "express";
import { createOrder, clearCart } from "../Controllers/checkoutController.js";
import { authRoutesValidation } from "../Middlewares/validateAuthMiddleware.js";
import { validateCheckout } from "../Middlewares/validateCartMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(authRoutesValidation);

checkoutRouter.post("/orders", validateCheckout, createOrder);
checkoutRouter.delete("/orders", clearCart);

export default checkoutRouter;
