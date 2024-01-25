import React from "react";

const Map = ({ mapUrl }) => {
  return (
    <div className="containerMap">
      <iframe
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        title="Lokasi Saya"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
};

export default Map;
