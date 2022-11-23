import bcrypt from "bcrypt";

import { connectToDb } from "../Database/db";

export async function signUp(req, res) {
  try {
    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    await connectToDb.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    });

    return res.sendStatus(201); //created
  } catch (err) {
    console.log("Error creating new user.");
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  try {
  } catch (err) {
    console.log("Error recovering user.");
    console.log(err);
    return res.sendStatus(500);
  }
}
