import GetInvolved from "../sections/GetInvolved";
import AboutUs from "../sections/AboutUs";
import { homeAboutData, homeData } from "../constants/appConstants";
import SectionTitle from "../components/cards/SectionTitle";
import DonationCardForm from "../components/forms/DonationCardForm";
import useScrollToTop from "../hooks/useScrollToTop";
import "./GetDonation.scss";

const GetDonation = () => {
    useScrollToTop();
    return (
        <>
            <div className="donation-basic">
                <SectionTitle>
                    Receiving Support: <span>Who Can Apply?</span>
                </SectionTitle>
                <AboutUs data={homeAboutData} />

                <SectionTitle>
                    What You Can <span>Expect</span>
                </SectionTitle>
                <GetInvolved data={homeData} />

                <SectionTitle>
                    Overcome Period Irritation with <span>Love Around You</span>
                </SectionTitle>
                <DonationCardForm />
            </div>
        </>
    );
};
export default GetDonation;
