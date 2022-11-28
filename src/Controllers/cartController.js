import { connectToDb } from "../Database/db.js";

export async function listProductsInCart(req, res) {
  try {
    const user = res.locals.user;
    const products = await connectToDb
      .collection("cart")
      .find({ userId: user._id })
      .toArray();
    return res.status(201).send(products); // listed products in cart
  } catch (err) {
    console.log("Error listing products in cart.");
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function addToCart(req, res) {
  const user = res.locals.user;
  const product = req.body.product;
  const quantity = req.body.quantity;
  let productInCart = undefined;
  try {
    productInCart = await connectToDb
      .collection("cart")
      .find({
        userId: user._id,
        productId: product._id,
      })
      .toArray();
  } catch (err) {
    console.log("Error checking if product is in cart.");
    console.log(err);
    return res.sendStatus(500);
  } finally {
    try {
      if (productInCart) {
        await connectToDb.collection("cart").deleteOne({
          userId: user._id,
          productId: product._id,
        }); // product deleted from cart
      }
    } catch (err) {
      console.log("Error deleting product from cart.");
      console.log(err);
      return res.sendStatus(500);
    } finally {
      try {
        await connectToDb.collection("cart").insertOne({
          userId: user._id,
          productId: product._id,
          productName: product.name,
          productType: product.type,
          productPrice: product.price,
          productImage: product.image,
          quantity: quantity,
        });
        return res.sendStatus(201); // product added to cart
      } catch (err) {
        console.log("Error adding product to cart.");
        console.log(err);
        return res.sendStatus(500);
      }
    }
  }
}

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
} 