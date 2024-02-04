import "./GetDonationBasic.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetInvolved from "../sections/GetInvolved";
import AboutUs from "../sections/AboutUs";
import "./GetDonationBasic.scss";

const GetDonation = () => {
    const navigate = useNavigate()
    const [recipientName, setRecipientName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [tampon, setTampon] = useState(0);
    const [pad, setPad] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post("http://localhost:8000/api/recipients", {
            recipientName,
            email,
            address,
            tampon,
            pad,
          })
          navigate("/")
        } catch (err) {
          console.log('Recipient registration failed: ', err.response);
        }
    };


    const homeData = {
        firstTitle: "1. Privacy and Anonymity Guaranteed",
        firstDescription:
            "We understand the importance of privacy and confidentiality. When you apply for support, your anonymity is fully guaranteed. Please feel comfortable reaching out for help without the worry of your personal information being disclosed. Your trust and comfort are paramount to us.",
        secondTitle: "2. Delivery to Your Provided Address",
        secondDescription:
            "Once your request is approved, we will ship the menstrual pads directly to the address you have provided. Our goal is to ensure that you receive the support you need promptly and efficiently",
        thirdTitle: "3. Tips and Support Alongside Your Pads",
        thirdDescription:
            "Our program operates on the principle that menstrual health is a right, not a privilege. Therefore, everyone in need of menstrual hygiene products is welcome to apply for support. We aim to ensure that no one is left without access to essential menstrual care.",
    };

    const homeAboutData = {
        title: "Everyone Is Eligible",
        description:
            "Our program operates on the principle that menstrual health is a right, not a privilege. Therefore, everyone in need of menstrual hygiene products is welcome to apply for support. We aim to ensure that no one is left without access to essential menstrual care.",
    };
    return (
        <>
            <div className="donation-basic">
                <div className="setion-title">
                    <h1 className="section-title__h1">
                        Receiving Support: <span>Who Can Apply?</span>
                    </h1>
                </div>
                <AboutUs data={homeAboutData} />
                <div className="setion-title">
                    <h1 className="section-title__h1">
                        What You Can <span>Expect</span>
                    </h1>
                </div>
                <GetInvolved data={homeData} />
                <div className="setion-title">
                    <h1 className="section-title__h1">
                        Overcome Period Irritation with <span>Love Around You</span>
                    </h1>
                </div>
                <div className="donation-card">
                    <h3>Request Your Choice of Menstrual Products</h3>
                    <form onSubmit={handleSubmit}>
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
                                autoFocus
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
                            {/* <label htmlFor="tampon">Preferred Type</label> */}
                            <input
                                id="tampon"
                                type="number"
                                min="0"
                                max="50"
                                name="tampon"
                                placeholder="Enter the number of tampons you need (or 0 if none)"
                                value={tampon}
                                onChange={(e) => setTampon(e.target.value)}
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
                                value={pad}
                                onChange={(e) => setPad(e.target.value)}
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
