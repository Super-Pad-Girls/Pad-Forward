import { useEffect, useState } from "react";
import {
    BsFill1CircleFill,
    BsFill2CircleFill,
    BsFill3CircleFill,
} from "react-icons/bs";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import qrcode from "/images/QR Code.png";
import useScrollToTop from "../hooks/useScrollToTop";
import HowItWorks from "../sections/HowItWorks";
import { donationTypesData } from "../constants/appConstants";
import SectionTitle from "../components/cards/SectionTitle";
import DonorForm from "../components/forms/DonorForm";
import "./BecomeADonor.scss";

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
    useScrollToTop();

    const [selectedLocation, setSelectedLocation] = useState(chicago);

    const handleClickLocation = (location) => {
        setSelectedLocation(location);
    };

    useEffect(() => {}, [selectedLocation]);
    useEffect(() => {}, [selectedLocation]);

    return (
        <>
            {/*1. Get Involved */}
            <SectionTitle subtitle={'"Simple Steps to Make a Big Impact"'}>
                <span>Three Ways to Get Involved in</span> PadForward
            </SectionTitle>
            <HowItWorks content={donationTypesData} />

            {/*2. Map */}
            <SectionTitle
                subtitle={
                    <>
                        If you have menstrual pads that you no longer need, you
                        can send them to the nearest PowerPadGirl address.{" "}
                        <br /> Your unused pads can make a significant
                        difference in someone's life by providing essential
                        menstrual hygiene products to those in need.
                    </>
                }
            >
                <BsFill1CircleFill /> Find <span>PowerPadGirl Location</span> To
                Send Pad
            </SectionTitle>

            <div className="state-buttons">
                <button
                    onClick={() => handleClickLocation(chicago)}
                    className="btn btn-primary"
                >
                    Illinois
                </button>
                <button
                    onClick={() => handleClickLocation(michiganCity)}
                    className="btn btn-primary"
                >
                    Indiana
                </button>
                <button
                    onClick={() => handleClickLocation(sanFran)}
                    className="btn btn-primary"
                >
                    California
                </button>
                <button
                    onClick={() => handleClickLocation(seattle)}
                    className="btn btn-primary"
                >
                    Washington
                </button>
            </div>
            <div className="map-box">
                <LoadScript
                    googleMapsApiKey={`${
                        import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
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

            {/*3. Donation*/}
            <SectionTitle
                subtitle={
                    <>
                        Your monetary donations are invaluable to us. The funds
                        are primarily used to cover shipping costs for donated
                        pads and to purchase additional pads when there's a
                        shortfall.
                        <br /> Every dollar you donate helps us ensure that
                        everyone who needs menstrual hygiene products can get
                        them.
                    </>
                }
            >
                <BsFill2CircleFill /> <span>Donation</span> Link
            </SectionTitle>

            <div className="paypal">
                <img className="paypal__img" src={qrcode} />
                <a href="https://www.paypal.com/donate/?business=Z2WDNMBAT5M9N&no_recurring=0&item_name=Join+PadForward+in+our+mission+to+support+underserved+women+by+donating+menstrual+pads.+&currency_code=USD&source=qr">
                    <button className="btn btn-secondary">
                        Go To Donation Page
                    </button>
                </a>
            </div>

            {/*4.  PowerPadGirl Member Request*/}
            <SectionTitle
                subtitle={
                    <>
                        Take an active role in our mission by becoming a Power
                        Pad Girl.
                        <br /> In this role, you will receive donated pads and
                        then distribute them to those in need based on incoming
                        requests.
                        <br />
                        This is a hands-on way to contribute and make a direct
                        impact on individuals' lives.
                    </>
                }
            >
                <BsFill3CircleFill /> <span>
                    PowerPadGirl Member Request
                </span>{" "}
                Link
            </SectionTitle>

            {/*5.  Donor form*/}
            <DonorForm />
        </>
    );
}

export default BecomeADonor;
