import mongoose from "mongoose";
const { Schema } = mongoose;

const recipientSchema = new Schema({
  recipientName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  tampon: { type: Number, required: true, default: 0 },
  pad: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Recipient", recipientSchema);
