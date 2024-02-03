import express from "express";
import path from "path";
import "dotenv/config";
import cors from "cors";

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// middlewares
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});