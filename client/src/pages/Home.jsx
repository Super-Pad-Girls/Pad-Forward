import { useEffect } from "react";
import { stepsData } from "../constants/appConstants";
import AboutUs from "../sections/AboutUs";
import GetInvolved from "../sections/GetInvolved";
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import useScrollToTop from "../hooks/useScrollToTop";
import { homeData } from "../constants/appConstants";
import { homeAboutData } from "../constants/appConstants";
import { useLocation } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    useScrollToTop();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [location]);

    return (
        <div className="home">
            <HeroSection />
            <div id="about" className="setion-title">
                <h1 className="section-title__h1">
                    About<span> PadForward</span>
                </h1>
            </div>
            <AboutUs data={homeAboutData} />

            <div id="howitworks" className="setion-title">
                <h1 className="section-title__h1">
                    <span>How</span> It Works
                </h1>
                <p>"Simple Steps to Make a Big Impact"</p>
            </div>
            <HowItWorks content={stepsData} />

            <div className="setion-title">
                <h1 className="section-title__h1">
                    Three Ways to Get Involved in <span>PadForward</span>
                </h1>
                <p>"Ready To Make Difference?"</p>
            </div>
            <GetInvolved data={homeData} />
        </div>
    );
};
export default Home;
