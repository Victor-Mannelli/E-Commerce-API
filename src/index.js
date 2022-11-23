import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./Routes/authRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
