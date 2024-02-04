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
import SectionTitle from "../components/cards/SectionTitle";
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

            <SectionTitle id={"about"}>
                About<span> PadForward</span>
            </SectionTitle>
            <AboutUs data={homeAboutData} />

            <SectionTitle
                id={"howitworks"}
                subtitle={'"Simple Steps to Make a Big Impact"'}
            >
                <span>How</span> It Works
            </SectionTitle>
            <HowItWorks content={stepsData} />

            <SectionTitle subtitle={'"Ready To Make Difference?"'}>
                Three Ways to Get Involved in <span>PadForward</span>
            </SectionTitle>
            <GetInvolved data={homeData} />
        </div>
    );
};
export default Home;
