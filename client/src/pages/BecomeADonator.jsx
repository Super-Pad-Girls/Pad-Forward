import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function BecomeADonator() {
  // const API_KEY = process.env.REACT_APP_API_GOOGLE_MAPS_API

  return (
    <>
    <LoadScript
      googleMapsApiKey={`${import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}`}// Replace with your Google Maps API key
    >
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, like markers, info windows, etc. go here */ }
      </GoogleMap>
    </LoadScript>
    </>
    
  )
}

export default React.memo(BecomeADonator);