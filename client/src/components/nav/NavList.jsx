import "./NavList.scss";

const NavList = ({ location = "header" }) => {
    let textClass;
    if (location === "footer") {
        textClass = "nav__list white-text";
    } else {
        textClass = "nav__list";
    }
    return (
        <nav className={`nav ${location === "header" && "sideMargins"}`}>
            <a href="#about" className={textClass}>
                About Us
            </a>
            <a href="#howitworks" className={textClass}>
                How It Works
            </a>
            <a href="/" className={textClass}>
                Blog
            </a>
            <a href="/contact" className={textClass}>
                Contact
            </a>
        </nav>
    );
};

export default NavList;
