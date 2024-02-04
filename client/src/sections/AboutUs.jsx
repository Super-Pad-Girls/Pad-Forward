import "./AboutUs.scss";

const AboutUs = ({ data }) => {
    const { title, description } = data;

    return (
        <>
            <div className="donation-introduction">
                <h3 className="donation-introduction__title">{title}</h3>
                <p className="donation-introduction__p">{description}</p>
            </div>
        </>
    );
};

export default AboutUs;
