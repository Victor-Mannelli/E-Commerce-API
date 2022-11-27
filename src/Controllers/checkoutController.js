import { connectToDb } from "../Database/db.js";
  
  export async function createOrder(req,res){
    const user = res.locals.user;
    const shippingInfo = req.body.userInfo.shippingInfo;
    const orderTotal = req.body.orderTotal;
    const orderItems = req.body.orderItems;

    delete req.body.userInfo.personalInfo; // Deleting personal information assuming it was already used
    delete req.body.userInfo.paymentInfo; // Deleting payment information assuming it was already used

    try {
        await connectToDb.collection("orders").insertOne({
            userId: user._id,
            shippingInfo,
            orderTotal,
            orderItems,
          });
        console.log("Order created.");
        return res.sendStatus(201); // order created
      } catch (err) {
        console.log("Error creating order.");
        console.log(err);
        return res.sendStatus(500);
      }
  }

  export async function clearCart(req, res) {
      try {
        const user = res.locals.user;
        await connectToDb.collection("cart").deleteMany({ userId: user._id });
    
        return res.sendStatus(201); // cart cleared
      } catch (err) {
        console.log("Error clearing cart.");
        console.log(err);
        return res.sendStatus(500);
      }
    }