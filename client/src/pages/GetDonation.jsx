import "./GetDonationBasic.scss";

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
                    <p>
                        Our program operates on the principle that menstrual
                        health is a right, not a privilege. Therefore, everyone
                        in need of menstrual hygiene products is welcome to
                        apply for support. We aim to ensure that no one is left
                        without access to essential menstrual care.
                    </p>
                </div>

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
