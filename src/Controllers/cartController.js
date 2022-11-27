import { connectToDb } from "../Database/db.js";

export async function listProductsInCart(req, res) {
  try {
    const user = res.locals.user;
    const products = await connectToDb
      .collection("cart")
      .find({ userId: user._id })
      .toArray();
    console.log("Listed products in cart.");
    return res.status(201).send(products); // listed products in cart
  } catch (err) {
    console.log("Error listing products in cart.");
    console.log(err);
    return res.sendStatus(500);
  }
} // working

export async function addToCart(req, res) {
  try {
    const product = await connectToDb.collection("cart").find({
      userId: res.locals.user._id,
      productId: req.body.product._id,
    });
    if (product) {
      try {
        await connectToDb.collection("cart").deleteOne({
          userId: res.locals.user._id,
          productId: req.body.productId,
        }); // product deleted from cart
        console.log("product deleted from cart")
        res.sendStatus(201);
      } catch (err) {
        console.log("Error deleting product from cart.");
        console.log(err);
        res.sendStatus(500);
      }
    }
    try {
      await connectToDb.collection("cart").insertOne({
        userId: res.locals.user._id,
        productId: req.body.product._id,
        productName: req.body.product.name,
        productType: req.body.product.type,
        productPrice: req.body.product.price,
        productImage: req.body.product.image,
        quantity: req.body.quantity,
      });
      console.log("Product added to cart.");
      return res.sendStatus(201); // product added to cart
    } catch (err) {
      console.log("Error adding product to cart.");
      console.log(err);
      return res.sendStatus(500);
    }
  } catch (err) {
    console.log("Error adding product to cart.");
    console.log(err);
    return res.sendStatus(500);
  }
} // working

export async function deleteFromCart(req, res) {
  try {
    await connectToDb.collection("cart").deleteOne({
      userId: res.locals.user._id,
      productId: req.body.productId,
    });

    const remainingCart = await connectToDb
      .collection("cart")
      .find({ userId: res.locals.user._id })
      .toArray();

    return res.status(201).send(remainingCart); // product deleted from cart
  } catch (err) {
    console.log("Error deleting product from cart.");
    console.log(err);
    return res.sendStatus(500);
  }
} // working
