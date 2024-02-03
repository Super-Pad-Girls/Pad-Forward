import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./BecomeADonor.scss";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

function BecomeADonor() {
    return (
        <>
            <LoadScript
                googleMapsApiKey={`${
                    import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
                }`}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                ></GoogleMap>
            </LoadScript>
        </>
    );
}

export default BecomeADonor;
