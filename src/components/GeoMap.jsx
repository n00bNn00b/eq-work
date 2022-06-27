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
  // console.log(position, place);
  return (
    <div className="flex justify-center">
      <MapContainer
        className="border-r-4 h-screen w-screen rounded z-0"
        center={pos}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} icon={markerIcon}>
          <Popup>
            <p className="font-bold"> {place}</p>
            <p>
              <span className="font-bold">latitude:</span> {pos[0]}
            </p>
            <p>
              {" "}
              <span className="font-bold">longtitude:</span> {pos[1]}{" "}
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GeoMap;
