import { stepsData } from "../constants/appConstants";
import AboutUs from "../sections/AboutUs";
import GetInvolved from "../sections/GetInvolved";
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import "./Home.scss";
import React from "react";

const homeData = {
    firstTitle: "1. Send Unused Pads:",
    firstDescription:
        "If you have menstrual pads that you no longer need, you can send them to the nearest PowerPadGirl address. Your unused pads can make a significant difference in someone's life by providing essential menstrual hygiene products to those in need.",
    secondTitle: "2. Support Through Funds",
    secondDescription:
        "Your monetary donations are invaluable to us. The funds are primarily used to cover shipping costs for donated pads and to purchase additional pads when there's a shortfall. Every dollar you donate helps us ensure that everyone who needs menstrual hygiene products can get them.",
    thirdTitle: "3. Distribute Donated Pads:",
    thirdDescription:
        "Take an active role in our mission by becoming a Power Pad Girl. In this role, you will receive donated pads and then distribute them to those in need based on incoming requests. This is a hands-on way to contribute and make a direct impact on individuals' lives.",
};

const homeAboutData = {
    title: "PadForward: Together, We Can End Menstrual Inequity",
    description:
        "At PadForward, we believe every woman deserves access to menstrual hygiene products. Our initiative connects post-menopausal women with excess menstrual supplies to those in need, ensuring dignity and health for all.",
};

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <div className="setion-title">
                <h1 className="section-title__h1">About<span> PadForward</span></h1>
            </div>
            <AboutUs data={homeAboutData} />

            <div className="setion-title">
                <h1 className="section-title__h1"><span>How</span> It Works</h1>
                <p>"Simple Steps to Make a Big Impact"</p>
            </div>
            <HowItWorks content={stepsData} />

            <div className="setion-title">
                <h1 className="section-title__h1">Three Ways to Get Involved in <span>PadForward</span></h1>
                <p>"Ready To Make Difference?"</p>
            </div>
            <GetInvolved data={homeData} />
        </div>
    );
};
export default Home;
