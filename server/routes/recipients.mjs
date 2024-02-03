import express from "express";
import { recipientCreate } from "../controllers/recipients.mjs";

const router = express.Router();

router.post("/recipients", recipientCreate);

export default router;
