import logo from "../../public/images/hero.png";
import "./HeroSection.scss";
import {BsBox2HeartFill} from "react-icons/bs";


const HeroSection = () => {
    return (
        <>
            <div className="hero">
                <div className="hero__logo">
                    <img src={logo} alt="PadForward Logo" />
                </div>
                <h1 className="hero__hero-title">Pay It Forward, <span className="highlight">PadForward</span></h1>
                <p className="hero__hero-title__p">Join PadForward in our mission to support underserved women by donating menstrual pads.
                    <br />Your contribution can make a significant difference.</p>
                <div className="hero__btns">
                    <button
                        className="btn btn-secondary-outline"
                        onClick={() => handleNavigate("become-a-donor")}
                    >
                        <BsBox2HeartFill /> Become a Donor
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => handleNavigate("get-donation")}
                    >
                        Need some pads?
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
