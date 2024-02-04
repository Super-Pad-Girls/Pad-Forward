import "./SectionTitle.scss";

const SectionTitle = ({ id, subtitle, children }) => {
    return (
        <div id={id} className="setion-title">
            <h1 className="section-title__h1">{children}</h1>
            <p className="section-title__p">{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
