import "./GetDonationBasic.scss";
import axios from "axios";
import { useState } from "react";

const GetDonation = () => {

    const [recipientName, setRecipientName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [tampon, setTampon] = useState(0);
    const [pad, setPad] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(`/api/recipients`, {
            recipientName,
            email,
            address,
            tampon,
            pad,
          })

        } catch (err) {
          console.log(err)

        }
    };
    return (
        <>
            <div className="donation-basic">
                <div>
                    <h2>Receiving Support: Who Can Apply?</h2>
                </div>
                <div className="donation-introduction">
                    <h3>&quot;Everyone Is Eligible&quot;</h3>
                    <p>
                        Our program operates on the principle that menstrual
                        health is a right, not a privilege. Therefore, everyone
                        in need of menstrual hygiene products is welcome to
                        apply for support. We aim to ensure that no one is left
                        without access to essential menstrual care.
                    </p>
                </div>
                {/* <SummaryBoard /> */}
                <div className="donation-card">
                    <h3>Get your choice of menstrual products!</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="recipientNamee">
                                Your Name
                            </label>
                            <input
                                id="recipientName"
                                type="text"
                                name="recipientName"
                                placeholder="Enter Name"
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
                                required
                            />
                        </div>
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            name="address"
                            placeholder="Enter Preferred Delivery Address"
                        />
                        <p>Your Choice of Menstrual Product(s)</p>
                        <div className="col-md-6">
                            {/* <label htmlFor="tampon">Preferred Type</label> */}
                            <input
                                id="tampon"
                                type="number"
                                min="0"
                                max="50"
                                name="tampon"
                                placeholder="Enter the number of tampons you need (or 0 if none)"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            {/* <label htmlFor="pad">Preferred Type</label> */}
                            <input
                                id="pad"
                                type="number"
                                min="0"
                                max="50"
                                name="pad"
                                placeholder="Enter the number of pads you need (or 0 if none)"
                                required
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default GetDonation;
