import React,{useEffect,useState} from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapstyle from "./mapstyle.json"; // Import the JSON file

const containerStyle = {
  width: "100%",
  height: "500px",
};


``
// Add custom options with the imported style
const options = {
  styles: mapstyle, // Use the imported JSON file here
  disableDefaultUI: false, // Optional: Disables default controls
};

const MapComponent = ({location}) => {
  const center = { lat: 37.7749, lng: -122.4194 };
  const [mv,setmv]=useState(center)
  useEffect(()=>{
    if(location){ setmv(location)}},[location]);
  
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options} // Apply styles here
      >
        {location && <Marker position={mv} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
