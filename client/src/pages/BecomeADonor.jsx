import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./BecomeADonor.scss";
import qrcode from "../../public/images/QR Code.png";
import HowItWorks from "../sections/HowItWorks";
import { donationTypesData } from "../constants/appConstants";

const containerStyle = {
    width: "800px",
    height: "400px",
};

const chicago = {
    lat: 41.894,
    lng: -87.624,
};

const sanFran = {
    lat: 37.8,
    lng: -122.438,
};

const michiganCity = {
    lat: 41.719,
    lng: -86.902,
};

const seattle = {
    lat: 47.614,
    lng: -122.328,
};

function BecomeADonor() {
    const [selectedLocation, setSelectedLocation] = useState(chicago);

    const handleClickLocation = (location) => {
        setSelectedLocation(location);
    };

    useEffect(() => { }, [selectedLocation]);

    const handleSubmit = () => {
        e.preventDefault();
    };
    return (
        <>
            {/*1. Map */}
            <div className="setion-title">
                <h1 className="section-title__h1">
                    1. Find <span>PowerPadGirl Location</span> To Send Pad
                </h1>
                <p>
                    If you have menstrual pads that you no longer need, you can send them
                    to the nearest PowerPadGirl address. <br /> Your unused pads can make
                    a significant difference in someone's life by providing essential
                    menstrual hygiene products to those in need.
                </p>
            </div>
            <div className="state-buttons">
                <button
                    onClick={() => handleClickLocation(chicago)}
                    className="btn btn-primary"
                >
                    {" "}
                    Illinois
                </button>{" "}
                <button
                    onClick={() => handleClickLocation(michiganCity)}
                    className="btn btn-primary"
                >
                    {" "}
                    Indiana
                </button>{" "}
                <button
                    onClick={() => handleClickLocation(sanFran)}
                    className="btn btn-primary"
                >
                    {" "}
                    California
                </button>{" "}
                <button
                    onClick={() => handleClickLocation(seattle)}
                    className="btn btn-primary"
                >
                    {" "}
                    Washington
                </button>{" "}
            </div>
            <div className="map-box">
                <LoadScript
                    googleMapsApiKey={`${import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
                        }`}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={selectedLocation}
                        zoom={15}
                    >
                        <MarkerF
                            position={selectedLocation}
                            icon={{ url: "/images/marker_icon.png", scale: 5 }}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>

            {/*2. Donation*/}
            <div className="setion-title">
                <h1 className="section-title__h1">
                    2. <span>Donation</span> Link
                </h1>
                <p>
                    Your monetary donations are invaluable to us. The funds are primarily
                    used to cover shipping costs for donated pads and to purchase
                    additional pads when there's a shortfall. Every dollar you donate
                    helps us ensure that everyone who needs menstrual hygiene products can
                    get them.
                </p>
            </div>
            <div className="paypal">
                <img className="paypal__img" src={qrcode} />
                <a href="https://www.paypal.com/donate/?business=Z2WDNMBAT5M9N&no_recurring=0&item_name=Join+PadForward+in+our+mission+to+support+underserved+women+by+donating+menstrual+pads.+&currency_code=USD&source=qr">
                    <button className="btn btn-secondary">Go To Donation Page</button>
                </a>
            </div>
            {/*3.  PowerPadGirl Member Request*/}
            <div className="setion-title">
                <h1 className="section-title__h1">
                    3. <span> PowerPadGirl Member Request</span> Link
                </h1>
                <p>
                Take an active role in our mission by becoming a Power Pad Girl. In this role, you will receive donated pads and then distribute them to those in need based on incoming requests. This is a hands-on way to contribute and make a direct impact on individuals' lives.
                </p>
            </div>
            <div className="power-pad-girl-form">
                <form onSubmit={handleSubmit}>
                <h2>Member Request Form</h2>
                    <div className="col-md-6">
                        <label htmlFor="powerPadGirlName">Power Pad Girl Name</label>
                        <input
                            id="powerPadGirlName"
                            type="text"
                            name="powerPadGirlName"
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="powerPadGirlemail">Power Pad Girl Email Address</label>
                        <input
                            id="powerPadGirlemail"
                            type="email"
                            name="powerPadGirlemail"
                            placeholder="Enter Email Address"
                            required
                        />
                    </div>
                    <label htmlFor="powerPadGirladdress">Power Pad Girl Address</label>
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
}

export default BecomeADonor;
