import AboutUs from "../sections/AboutUs";
import GetInvolved from "../sections/GetInvolved";
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import "./Home.scss";

const homeData = {
    firstTitle: "1. Privacy and Anonymity Guaranteed",
    firstDescription:
        "We understand the importance of privacy and confidentiality. When you apply for support, your anonymity is fully guaranteed. Please feel comfortable reaching out for help without the worry of your personal information being disclosed. Your trust and comfort are paramount to us.",
};

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <AboutUs />
            <HowItWorks />
            <GetInvolved data={homeData} />
        </div>
    );
};
export default Home;
