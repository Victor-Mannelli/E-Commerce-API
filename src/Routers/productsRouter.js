import { Router } from "express";
import { ProductsList } from "../Controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", ProductsList);

export default productsRouter;
