import { connectToDb } from "../Database/db.js";

export async function ProductsList(req, res) {
	try {
		const products = await connectToDb
			.collection("products")
			.find({})
			.toArray();

		let result = {meat: [], dessert: [], beverage: [], grains: [], allproducts: products}
		products.forEach(e => {
			result[e.type].push(e)
		});

		res.status(201).send(result);
	} catch (err) {
		console.log(err);
		return res.sendStatus(500);
	}
}