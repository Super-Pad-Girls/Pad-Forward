import { useState } from "react";
import axios from "axios";
import "./DonationCardForm.scss";

const DonationCardForm = () => {
    const [recipientName, setRecipientName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [tampon, setTampon] = useState(0);
    const [pad, setPad] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_REACT_APP_API}/api/recipients`,
                {
                    recipientName,
                    email,
                    address,
                    tampon,
                    pad,
                }
            );
            if (data.error) {
                console.error("Error occured. Try again.");
            } else {
                clearData();
                setIsSubmitted(true);
            }
        } catch (err) {
            console.log("Recipient registration failed: ", err.response);
        }
    };

    const clearData = () => {
        setRecipientName("");
        setEmail("");
        setAddress("");
        setTampon(0);
        setPad(0);
    };

    return (
        <div className="donation-card-form-container">
            {isSubmitted ? (
                <h3 className="donation-card-text">
                    Thank you for the submission. We will reach out to you soon!
                </h3>
            ) : (
                <form className="donation-card-form" onSubmit={handleSubmit}>
                    <h3>
                        Fill out this form to receive your choice of menstrual
                        products!
                    </h3>
                    <div className="col-md-6">
                        <label htmlFor="recipientNamee">Your Name</label>
                        <input
                            id="recipientName"
                            type="text"
                            name="recipientName"
                            placeholder="Enter Name"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Enter Preferred Delivery Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <h3>Your Choice of Menstrual Product(s)</h3>
                    <div className="col-md-6">
                        <label htmlFor="tampon">
                            How many packages of tampons do you need? (or 0 if
                            none)
                        </label>
                        <input
                            id="tampon"
                            type="number"
                            min="0"
                            max="50"
                            name="tampon"
                            value={tampon}
                            onChange={(e) => setTampon(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pad">
                            How many packages of pads do you need? (or 0 if
                            none)
                        </label>
                        <input
                            id="pad"
                            type="number"
                            min="0"
                            max="50"
                            name="pad"
                            value={pad}
                            onChange={(e) => setPad(Number(e.target.value))}
                            required
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};
export default DonationCardForm;
