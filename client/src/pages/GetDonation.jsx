import "./GetDonationBasic.scss";
import privacyImage from '../../public/images/privacy.png';
import deliveryImage from '../../public/images/delivery.png';
import supportImage from '../../public/images/support.png';


const GetDonation = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="donation-basic">
                <div>
                    <h2>Receiving Support: Who Can Apply?</h2>
                </div>
                <div className="donation-introduction">
                    <h3> "Everyone Is Eligible"</h3>
                    <p>Our program operates on the principle that menstrual health is a right, not a privilege.
                        Therefore, everyone in need of menstrual hygiene products is welcome to apply for support. We
                        aim to ensure that no one is left without access to essential menstrual care.</p>
                </div>
                {/* <SummaryBoard /> */}
                <div className="summary-board">
                    <div className="content-row">
                        <div className="image" style={{backgroundImage: `url(${privacyImage})`}}></div>
                        <div className="text">
                            <h2>1. Privacy and Anonymity Guaranteed</h2>
                            <p>We understand the importance of privacy and confidentiality. When you apply for support,
                                your anonymity is fully guaranteed. Please feel comfortable reaching out for help
                                without the worry of your personal information being disclosed. Your trust and comfort
                                are paramount to us.</p>
                        </div>
                    </div>
                    <div className="content-row reverse">
                        <div className="text">
                            <h2>2. Delivery to Your Provided Address</h2>
                            <p>Once your request is approved, we will ship the menstrual pads directly to the address
                                you have provided. Our goal is to ensure that you receive the support you need promptly
                                and efficiently.</p>
                        </div>
                        <div className="image" style={{backgroundImage: `url(${deliveryImage})`}}></div>
                    </div>
                    <div className="content-row">
                        <div className="image" style={{backgroundImage: `url(${supportImage})`}}></div>
                        <div className="text">
                            <h2>3. Tips and Support Alongside Your Pads</h2>
                            <p>With every package of menstrual pads, we also send tips and advice on managing your
                                period, all shared with love and care. These tips come from donors who have navigated
                                their own menstrual experiences and wish to pass on their knowledge and support to help
                                you overcome any challenges with menstruation.</p>
                        </div>
                    </div>
                </div>

                <div className="donation-card">
                    <h3>GetDonation</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="recipientNamee">recipientName</label>
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
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
                </div>
        </>
    );
};
export default GetDonation;
