import privacyImage from "../../public/images/privacy.png";
import deliveryImage from "../../public/images/delivery.png";
import supportImage from "../../public/images/support.png";
import "./GetInvolved.scss";

const GetInvolved = ({ data }) => {
    const { firstTitle, firstDescription } = data;
    return (
        <>
            <div className="summary-board">
                <div className="content-row">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${privacyImage})` }}
                    ></div>
                    <div className="text">
                        <h2>{firstTitle}</h2>
                        <p>{firstDescription}</p>
                    </div>
                </div>
                <div className="content-row reverse">
                    <div className="text">
                        <h2>2. Delivery to Your Provided Address</h2>
                        <p>
                            Once your request is approved, we will ship the
                            menstrual pads directly to the address you have
                            provided. Our goal is to ensure that you receive the
                            support you need promptly and efficiently.
                        </p>
                    </div>
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${deliveryImage})` }}
                    ></div>
                </div>
                <div className="content-row">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${supportImage})` }}
                    ></div>
                    <div className="text">
                        <h2>3. Tips and Support Alongside Your Pads</h2>
                        <p>
                            With every package of menstrual pads, we also send
                            tips and advice on managing your period, all shared
                            with love and care. These tips come from donors who
                            have navigated their own menstrual experiences and
                            wish to pass on their knowledge and support to help
                            you overcome any challenges with menstruation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInvolved;
