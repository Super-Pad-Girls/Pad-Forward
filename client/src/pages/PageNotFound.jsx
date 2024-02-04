import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const PageNotFound = () => {
    useScrollToTop();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 style={{ lineHeight: "1.5", margin: "40px 0" }}>
                404 <br />
                We can’t find the page you’re looking for.
            </h1>
            <Link to="/">
                <button
                    className="btn btn-primary"
                    style={{ marginBottom: "150px" }}
                >
                    Back Home
                </button>
            </Link>
        </div>
    );
};

export default PageNotFound;
