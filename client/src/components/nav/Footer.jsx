import NavList from "./NavList";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-box">
                <h1>
                    Pad<span>Forward</span>
                </h1>
                <NavList location={"footer"} />
                <p>© 2024. All rights reserved by SuperPadGirls</p>
            </div>
        </div>
    );
};

export default Footer;
