import express from "express";
import cors from "cors";
// import router from "..."

const app = express();
app.use(cors());
app.use(express.json());
// app.use(router)
const port = 5000 || process.env.PORT

app.listen(port)