import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: require("../image/marker-icon.png"),
  iconSize: [30, 45],
});

const GeoMap = ({ position, place }) => {
  const pos = position;
  console.log(position);
  if (pos === null) {
    console.log("null fixed");
  }

  return (
    <div className="flex justify-center items-center">
      <MapContainer
        style={{ width: "1000px", height: "600px" }}
        center={pos}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <div>
              {place}
              <p>latitude: {pos[0]}</p>
              <p>longtitude:{pos[1]} </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GeoMap;
