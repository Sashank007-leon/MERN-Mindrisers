import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import chats from "./data/data.js"; 
import userRouter from "./routes/userRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/chats", (req, res) => {
  res.json(chats);
});

app.get("/chats/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  if (!singleChat) {
    return res.status(404).json({ message: "Chat not found" });
  }
  res.json(singleChat);
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
