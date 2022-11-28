import { Router } from "express";
import {
  listProductsInCart,
  addToCart,
  deleteFromCart,
} from "../Controllers/cartController.js";
import { authRoutesValidation } from "../Middlewares/validateAuthMiddleware.js";
import { validateProduct, validateProductId } from "../Middlewares/validateCartMiddleware.js";

const cartRouter = Router();

cartRouter.use(authRoutesValidation);

cartRouter.get("/cart", listProductsInCart);
cartRouter.post("/cart", validateProduct, addToCart);
cartRouter.delete("/cart", validateProductId, deleteFromCart);

export default cartRouter;
