import React from 'react';
import ReactNYC from 'react-nyc-choropleth';

class Map extends React.Component {
  render() {

    const mapboxAccessToken = "pk.eyJ1IjoicG9vbGVkaG91c2UiLCJhIjoiY2p1aGg2N2o5MHozZTRkcDhrZDltMXp6dyJ9.SXu4dBf_bVC8Xlpy7WnYqQ"; //TODO: delete token before final deployment
    const mapboxType = "light";
    const position = [40.7831, -73.9712];
    const zoom = 12;
    // const data = {...nycData};
    const data = [
        {
          name: "Chelsea",
          values: [{label: "Mean $", val: 250},{label: "Median $", val: 221}, {label: "Total Businesses", val: "89"}],
          color: "#E31A1C"
        },
        {
          name: "SoHo",
          values: [{label: "Mean $", val: 445},{label: "Median $", val: 450}, {label: "Total Businesses", val: "34"}],
          color: "#1b7837"
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
          mapWidth="100%"
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







// TODO: @self-note: use "http://colorbrewer2.org/" for color picking different zones