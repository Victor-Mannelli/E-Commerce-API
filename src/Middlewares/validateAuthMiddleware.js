import { signInSchema, signUpSchema } from "../Models/authSchema.js";

export function validateSignUp(req, res, next) {
  const { error } = signUpSchema.validate(req.body);
  if (error) return res.sendStatus(422); // unprocessable entity

  next();
}

export function validateSignIn(req, res, next) {
  const { error } = signInSchema.validate(req.body);
  if (error) return res.sendStatus(422); // unprocessable entity

  next();
}
