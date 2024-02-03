import StepCard from "../components/cards/StepCard";
import "./HowItWorks.scss";

const HowItWorks = ({ content }) => {
    return (
        <div className="howitworks">
            {content.map((data) => (
                <StepCard key={data._id} data={data} />
            ))}
        </div>
    );
};

export default HowItWorks;
