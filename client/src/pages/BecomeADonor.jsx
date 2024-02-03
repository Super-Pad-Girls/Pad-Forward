import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import HowItWorks from "../sections/HowItWorks";
import "./BecomeADonor.scss";
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

    useEffect(() => {}, [selectedLocation]);

    return (
        <>
            <HowItWorks content={donationTypesData} />
            <div className="state-buttons">
                <button
                    onClick={() => handleClickLocation(chicago)}
                    className="btn btn-primary"
                >
                    {" "}
                    Illinois{" "}
                </button>{" "}
                <button
                    onClick={() => handleClickLocation(michiganCity)}
                    className="btn btn-primary"
                >
                    {" "}
                    Indiana{" "}
                </button>{" "}
                <button
                    onClick={() => handleClickLocation(sanFran)}
                    className="btn btn-primary"
                >
                    {" "}
                    California{" "}
                </button>{" "}
                <button
                    onClick={() => handleClickLocation(seattle)}
                    className="btn btn-primary"
                >
                    {" "}
                    Washington{" "}
                </button>{" "}
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
        </>
    );
}

export default BecomeADonor;
