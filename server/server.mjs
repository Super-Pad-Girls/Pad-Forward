import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

import recipientRoutes from "./routes/recipients.mjs";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", recipientRoutes);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
