import { signInSchema, signUpSchema } from "../Models/authSchema.js";

export function validateSignUp(req, res, next) {
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    const errorList = error.details.map(detail=>detail.message)
    return res.status(422).send(errorList); // unprocessable entity
  }

  next();
}

export function validateSignIn(req, res, next) {
  const { error } = signInSchema.validate(req.body);
  if (error) {
    const errorList = error.details.map(detail=>detail.message)
    return res.status(422).send(errorList); // unprocessable entity
  }

  next();
}