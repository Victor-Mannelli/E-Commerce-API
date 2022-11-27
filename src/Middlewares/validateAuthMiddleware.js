import { connectToDb } from "../Database/db.js";
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

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    console.log("nao achou token")
    return res.sendStatus(401);
  }

  try {
    const session = await connectToDb.collection("sessions").findOne({ token });
    if (!session) {
      console.log("nao achou sessao")
      return res.sendStatus(401);
    }
    const user = await connectToDb.collection("users").findOne({ _id: session?.userId });
    if (!user) {
      console.log("nao achou usuario")
      return res.sendStatus(401);
    }
    
    // console.log(user);
    res.locals.user = user;
  } catch (err) {
    console.log(err);
    console.log("deu ruim na validacao do token");
    res.sendStatus(500);
  }

  next();
}