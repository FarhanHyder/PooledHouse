import React from 'react';
import ReactNYC from 'react-nyc-choropleth';
import { API, graphqlOperation } from "aws-amplify";
import * as queries from '../../graphql/queries';
import { getColor, averageTipsByNeighborhood, averageTipsClean, aTBNDayParse, aTBNMasterParse } from './mapFunctions';
import { Form, Container, Col, Row, Button } from 'react-bootstrap'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 'All',
      shift: 'All',
      position: 'All',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state.day);
  }

  handleReset = () => {
    this.setState(
      { 
        day: 'All',
        shift: 'All',
        position: 'All'
      }
    )
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
    const map_position = [40.7831, -73.9712];
    const zoom = 12;

    const neighborhoodStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
    const neighborhoodHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
    const excludeNeighborhoods = ["Liberty Island", "Ellis Island"];

    let data = '';
    const day = this.state.day;
    const shift = this.state.shift;
    const position = this.state.position;

    data = averageTipsClean(
      aTBNMasterParse(
        this.props.tip_info, 
        this.state.day, 
        this.state.shift, 
        this.state.position
      )
    )

    return (
      <div>
        <Container fluid='true'>
          <Form className="text-left filter">
            <Form.Row>
                <Form.Group controlID="day" as={Col} md='4'>
                  <Form.Label>Day</Form.Label>
                    <Form.Control 
                      as='select' 
                      name="day" 
                      value={day}
                      onChange={this.handleChange}>
                      <option>All</option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group conrolID="shift" as={Col} md='4'>
                  <Form.Label>Shift</Form.Label>
                    <Form.Control
                      as='select'
                      name='shift'
                      value={shift}
                      onChange={this.handleChange}>
                      <option>All</option>
                      <option>AM</option>
                      <option>PM</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlID="position" as={Col} md='4'>
                  <Form.Label>Position</Form.Label>
                    <Form.Control
                      as='select'
                      name='position'
                      value={position}
                      onChange={this.handleChange}>
                      <option>All</option>
                      <option>Bartender</option>
                      <option>Server</option>
                      <option>Host</option>
                      <option>Busser</option>
                      <option>Other</option>
                    </Form.Control>
                </Form.Group>
              </Form.Row>
              <Row>
                <Col md='4'></Col>
              <Button as={Col} md='4'
                variant="primary" 
                type="reset" 
                onClick={this.handleReset}>Reset Filter
              </Button>
              <Col md='4'></Col>
              </Row>
          </Form>
          <ReactNYC
            mapboxAccessToken={mapboxAccessToken} // Required
            mapHeight="600px" // Required
            mapWidth="100%"
            className="container"
            mapboxType={mapboxType}
            mapCenter={map_position}
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
        </Container>
      </div>
    )
  }
}

export default Map;



//note: following link has been to select 6 different layer of colors
//       http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=6