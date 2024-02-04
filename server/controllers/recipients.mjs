import Recipient from "../models/recipient.mjs";

export const recipientCreate = async (req, res) => {
  try {
    const { recipientName, email, address, tampon, pad } = req.body;
    const recipient = new Recipient({
      recipientName,
      email,
      address,
      tampon,
      pad,
    });
    await recipient.save();
    res.redirect("http://localhost:5173");
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, error: err.message });
  }
};
