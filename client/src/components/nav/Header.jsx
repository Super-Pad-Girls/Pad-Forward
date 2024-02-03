import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsBox2HeartFill } from "react-icons/bs";
import NavList from "./NavList";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = (link) => {
        switch (link) {
            case "become-a-donor":
                navigate("/become-a-donor");
                break;
            case "get-donation":
                navigate("/get-donation");
                break;
            default:
                break;
        }
    };
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header__company-name">
                    <span>Pad</span>Forward
                </h1>
            </Link>
            <NavList />
            <div className="header__btns">
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
    );
};
export default Header;
