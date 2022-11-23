import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { connectToDb } from "../Database/db.js";

export async function signUp(req, res) {
  try {
    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    await connectToDb.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    });

    return res.sendStatus(201); // user created
  } catch (err) {
    console.log("Error creating new user.");
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  try {
    const user = await connectToDb
      .collection("users")
      .findOne({ email: req.body.email });
    if (!user) return res.sendStatus(404); // user not found

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = uuid();
      await connectToDb
        .collection("sessions")
        .insertOne({ token, userId: user._id });
      return res.send({ token, name: user.name }); // user signed in
    }
  } catch (err) {
    console.log("Error recovering user.");
    console.log(err);
    return res.sendStatus(500);
  }
}