import { connectToDb } from "../Database/db.js";

export async function ProductsList(req, res) {
	try {
		const products = await connectToDb
			.collection("products")
			.find({})
			.toArray();

		res.status(201).send(products);
	} catch (err) {
		console.log(err);
		return res.sendStatus(500);
	}
}