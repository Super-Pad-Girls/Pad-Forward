import "./AboutUs.scss";

const AboutUs = ({data}) => {
    const { title, description } = data;

    return <>
    <div className="donation-introduction">
                    <h3> {title}</h3>
                    <p>{description}</p>
                </div>
    </>;
};

export default AboutUs;
