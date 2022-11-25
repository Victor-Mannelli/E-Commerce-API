import { connectToDb } from "../Database/db.js";
import express from "express";
insertinglists();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/temp", async (req, res) => {
  await connectToDb.collection("products").insertMany(products);
  res.sendStatus(201);
});

const products = [
  {
    "name": "Beef",
    "type": "meat",
    "price": "$4.81/kg"
  },
  {
    "name": "Turkey",
    "type": "meat",
    "price": "$8.94/kg"
  },
  {
    "name": "Duck",
    "type": "meat",
    "price": "$2.46/kg"
  },
  {
    "name": "Pork",
    "type": "meat",
    "price": "$2.47/kg"
  },
  {
    "name": "Lamb",
    "type": "meat",
    "price": "$5.87/kg"
  },
  {
    "name": "Goat",
    "type": "meat",
    "price": "$3.54/kg"
  },
  {
    "name": "Pheasant",
    "type": "meat",
    "price": "$24.02/kg"
  },
  {
    "name": "Chicken",
    "type": "meat",
    "price": "$1.05/kg"
  },
  {
    "name": "Bison",
    "type": "meat",
    "price": "$106.99/kg"
  },
  {
    "name": "Seafood",
    "type": "meat",
    "price": "$2.74/kg"
  },
  {
    "name": "Tea",
    "type": "beverage",
    "price": "$7.95"
  },
  {
    "name": "Water 1.5L",
    "type": "beverage",
    "price": "$2.00"
  },
  {
    "name": "Milk",
    "type": "beverage",
    "price": "$0.39"
  },
  {
    "name": "Juice Bottle",
    "type": "beverage",
    "price": "$6.33"
  },
  {
    "name": "Case of Beer",
    "type": "beverage",
    "price": "$31.21"
  },
  {
    "name": "Chocolate Milk",
    "type": "beverage",
    "price": "$4.99"
  },
  {
    "name": "Iced Tea",
    "type": "beverage",
    "price": "$7.18"
  },
  {
    "name": "Soda",
    "type": "beverage",
    "price": "$3.26"
  },
  {
    "name": "Snikers",
    "type": "dessert",
    "price": "$1.18"
  },
  {
    "name": "Twix",
    "type": "dessert",
    "price": "$1.18"
  },
  {
    "name": "Chocolate Bar",
    "type": "dessert",
    "price": "$2.38"
  },
  {
    "name": "KitKat",
    "type": "dessert",
    "price": "$1.36"
  },

  {
    "name": "M&M",
    "type": "dessert",
    "price": "$2.38"
  },
  {
    "name": "White Rice",
    "type": "grains",
    "price": "$10:59"
  },
  {
    "name": "White Corn Grits",
    "type": "grains",
    "price": "$3.69"
  },
  {
    "name": "Black Beens",
    "type": "grains",
    "price": "$7.89"
  },
  {
    "name": "Organic Sugar",
    "type": "grains",
    "price": "$4.99"
  },
  {
    "name": "Brown Rice",
    "type": "grains",
    "price": "$4.39"
  }
]
