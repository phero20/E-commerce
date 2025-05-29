import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 6789;
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api");
});

app.listen(PORT, () => {
  console.log("started on port " + PORT);
});
