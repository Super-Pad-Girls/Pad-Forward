import "./NavList.scss";

const NavList = () => {
    return (
        <nav className="nav">
            <a href="#about" className="nav__list">
                About Us
            </a>
            <a href="#howitworks" className="nav__list">
                How It Works
            </a>
            <a href="/" className="nav__list">
                Blog
            </a>
            <a href="/contact" className="nav__list">
                Contact
            </a>
        </nav>
    );
};

export default NavList;
