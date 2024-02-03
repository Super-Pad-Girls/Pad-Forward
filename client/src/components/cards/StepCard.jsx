import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsBagHeart } from "react-icons/bs";
import "./StepCard.scss";

const StepCard = ({ data }) => {
    const { name, msg, image, link } = data;

    const location = useLocation();
    const navigate = useNavigate();

    //state
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (location.pathname === "/") setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <div
            className={
                "step-card-box scrollbarDesign d-flex flex-column justify-content-center align-items-center"
            }
            style={{
                height: "200px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {!isHovered && (
                <div className="text-center">
                    <img
                        style={{ width: "50px", height: "50px" }}
                        src={image}
                        alt={`${name} Icon`}
                    />
                    <h3>{name}</h3>
                </div>
            )}
            {isHovered && (
                <div className="hovered-card">
                    <h4>&quot;{msg}&quot;</h4>

                    <button
                        className="btn btn-primary donate-btn"
                        onClick={handleClick}
                    >
                        <BsBagHeart /> How to donate?
                    </button>
                </div>
            )}
        </div>
    );
};

export default StepCard;
