import { Router } from "express";
import {
  listProductsInCart,
  addToCart,
  deleteFromCart,
  clearCart,
} from "../Controllers/cartController.js";
import { authRoutesValidation } from "../Middlewares/validateAuthMiddleware.js";

const cartRouter = Router();

cartRouter.use(authRoutesValidation);

cartRouter.get("/cart", listProductsInCart);
cartRouter.post("/cart", addToCart);
cartRouter.delete("/cart", deleteFromCart);
// cartRouter.delete("/cart", clearCart);

export default cartRouter;
