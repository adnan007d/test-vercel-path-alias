import express from "express";
import { message } from "@/util/message";

const app = express();

app.get("/", (_, res) => {
  res.status(200).json({ message: message });
});

export default app;
