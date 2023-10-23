import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.7128, // Initial latitude
    lng: -74.0060, // Initial longitude
  };

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10} 
        center={defaultCenter}
      >
        {/* Add markers, polygons, or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;