import { connectToDb } from "../Database/db.js";

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
  
  export async function createOrder(req,res){
    try {
        await connectToDb.collection("orders").insertOne({
            
        });
    
        return res.sendStatus(201); // order created
      } catch (err) {
        console.log("Error creating order.");
        console.log(err);
        return res.sendStatus(500);
      }
  }