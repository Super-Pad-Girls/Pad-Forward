import useScrollToTop from "../hooks/useScrollToTop";
import "./Contact.scss";

const Contact = () => {
    useScrollToTop();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("contact form submitted!");
    };

    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center">
                <div className="contact__contact-box container-fluid">
                    <h3 className="contact__contact-box__h3">
                        Send Us Message
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <label
                                    className="contact__contact-box__label"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="contact__input"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    autoFocus
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    className="contact__contact-box__label"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <input
                                    className="contact__input"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    required
                                />
                            </div>
                        </div>
                        <label
                            className="contact__contact-box__label"
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            className="contact__input"
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Enter Phone Number"
                        />
                        <label
                            className="contact__contact-box__label"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="contact__textarea"
                            id="message"
                            name="message"
                            placeholder="Write Your Message"
                            required
                        />
                        <button
                            type="submit"
                            className="contact__contact-box__button btn btn-primary"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
