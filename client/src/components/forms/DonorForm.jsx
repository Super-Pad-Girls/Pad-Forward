import "./Donorform.scss";

const DonorForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
    };

    return (
        <>
            <div className="power-pad-girl-form">
                <form className="donor-form" onSubmit={handleSubmit}>
                    <h2>Member Request Form</h2>
                    <div className="col-md-6">
                        <label htmlFor="powerPadGirlName">Name</label>

                        <input
                            id="powerPadGirlName"
                            type="text"
                            name="powerPadGirlName"
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="powerPadGirlemail">Email Address</label>
                        <input
                            id="powerPadGirlemail"
                            type="email"
                            name="powerPadGirlemail"
                            placeholder="Enter Email Address"
                            required
                        />
                    </div>

                    <label htmlFor="powerPadGirladdress">Address</label>
                    <input
                        id="address"
                        type="text"
                        name="address"
                        placeholder="Enter Preferred Delivery Address"
                    />

                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default DonorForm;
