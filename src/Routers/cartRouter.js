import { Router } from "express";
import {
  listProductsInCart,
  addToCart,
  deleteFromCart,
} from "../Controllers/cartController.js";
import { authRoutesValidation } from "../Middlewares/validateAuthMiddleware.js";

const cartRouter = Router();

cartRouter.use(authRoutesValidation);

cartRouter.get("/cart", listProductsInCart);
cartRouter.post("/cart", addToCart);
cartRouter.delete("/cart", deleteFromCart);

export default cartRouter;
