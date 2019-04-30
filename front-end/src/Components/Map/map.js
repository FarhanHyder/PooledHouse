import React from 'react';
import ReactNYC from 'react-nyc-choropleth';
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../../graphql/queries';
import { getColor, averageTipsByNeighborhood, averageTipsClean } from './mapFunctions';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tip_data: [],
    }
  }
/*
  async componentDidMount() {
    try {
      const tip_data = await API.graphql(graphqlOperation(queries.listTipEntrys));
      console.log(tip_data);
      this.setState( {tip_data: tip_data.items} )
    } catch (err) {
      console.log('could not get list', err);
      alert("listtipentry failed");
    }
  };
*/
  render() {

    const mapboxAccessToken = "pk.eyJ1IjoicG9vbGVkaG91c2UiLCJhIjoiY2p1aGg2N2o5MHozZTRkcDhrZDltMXp6dyJ9.SXu4dBf_bVC8Xlpy7WnYqQ"; //TODO: delete token before final deployment
    const mapboxType = "light";
    const position = [40.7831, -73.9712];
    const zoom = 12;

    const neighborhoodStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
    const neighborhoodHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
    const excludeNeighborhoods = ["Liberty Island", "Ellis Island"];

    const data = averageTipsClean(averageTipsByNeighborhood(this.props.tip_info));
    //const data = averageTipsClean(averageTipsByNeighborhood(this.state.tip_data))

    return (
      <div>
        <ReactNYC
          mapboxAccessToken={mapboxAccessToken} // Required
          mapHeight="600px" // Required
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



//note: following link has been to select 6 different layer of colors
//       http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=6