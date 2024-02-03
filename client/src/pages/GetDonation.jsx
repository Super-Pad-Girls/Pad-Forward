import "./GetDonationBasic.scss";
import GetInvolved from "../sections/GetInvolved";
import AboutUs from "../sections/AboutUs"

const GetDonation = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const homeData = {
        firstTitle: "1. Privacy and Anonymity Guaranteed",
        firstDescription:
            "We understand the importance of privacy and confidentiality. When you apply for support, your anonymity is fully guaranteed. Please feel comfortable reaching out for help without the worry of your personal information being disclosed. Your trust and comfort are paramount to us.",
        secondTitle: "2. Delivery to Your Provided Address",
        secondDescription: "Once your request is approved, we will ship the menstrual pads directly to the address you have provided. Our goal is to ensure that you receive the support you need promptly and efficiently",
        thirdTitle: "3. Tips and Support Alongside Your Pads",
        thirdDescription: "Our program operates on the principle that menstrual health is a right, not a privilege. Therefore, everyone in need of menstrual hygiene products is welcome to apply for support. We aim to ensure that no one is left without access to essential menstrual care."    
    };

    const homeAboutData = {
        title: "Everyone Is Eligible",
        description: "At PadForward, we believe every woman deserves access to menstrual hygiene products. Our initiative connects post-menopausal women with excess menstrual supplies to those in need, ensuring dignity and health for all."
    };
    return (
        <>
            <div className="donation-basic">
                <div>
                    <h2>Receiving Support: Who Can Apply?</h2>
                </div>
                <AboutUs data={homeAboutData}/>
                <GetInvolved data={homeData} />
                <div className="donation-card">
                    <h3>GetDonation</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="recipientNamee">
                                recipientName
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
                                type="tampon"
                                name="tampon"
                                placeholder="Enter Number of Tampon"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            {/* <label htmlFor="pad">Preferred Type</label> */}
                            <input
                                id="pad"
                                type="pad"
                                name="pad"
                                placeholder="Enter Number of Pad"
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
