import { Router } from "express";
import { signIn, signUp } from "../Controllers/authController.js";
import { validateSignIn, validateSignUp } from "../Middlewares/validateAuthMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUp, signUp);
authRouter.post("/signin", validateSignIn, signIn);

export default authRouter;