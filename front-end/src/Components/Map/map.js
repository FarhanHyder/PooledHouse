import React from 'react';
import ReactNYC from 'react-nyc-choropleth';

class Map extends React.Component {
  render() {
    const mapboxAccessToken = "pk.eyJ1IjoicG9vbGVkaG91c2UiLCJhIjoiY2p1aGg2N2o5MHozZTRkcDhrZDltMXp6dyJ9.SXu4dBf_bVC8Xlpy7WnYqQ"; // Your access token
    const mapboxType = "streets";
    const position = [40.7831, -73.9712];
    const zoom = 12;
    const data = [
      {
        name: "Chelsea",
        values: [{label: "Population", val: 20000}, {label: "Restaurants", val: "690"}],
        color: "#E31A1C"
      }
    ]
    const neighborhoodStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
    const neighborhoodHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
    const excludeNeighborhoods = ["Liberty Island", "Ellis Island"];

    return (
      <div>

        <ReactNYC
          mapboxAccessToken={mapboxAccessToken} // Required
          mapHeight="800px" // Required
          mapWidth="600px"
          className="container"
          mapboxType={mapboxType}
          mapCenter={position}
          mapZoom={zoom}
          mapScrollZoom={false}
          neighborhoodOn={true}
          tooltip={true}
          tooltipSticky={false}
          data={data}
          neighborhoodStyle={neighborhoodStyle}
          neighborhoodHoverStyle={neighborhoodHoverStyle}
          excludeNeighborhoods={excludeNeighborhoods}
        />

      </div>
    )
  }
}

export default Map;