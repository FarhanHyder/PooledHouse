/** 
 * @class WelcomePage a generally welcome page with "about me" section.
 * @extends Component
 */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Button, Dropdown, DropdownButton, Navbar, Nav, Form, FormControl, Card} from 'react-bootstrap'

class WelcomePage extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
          <div className = "container fluid">
          <br></br>
          <Card bg="info" text="white" style={{  }}>
            <Card.Header>WELCOME TO POOLED HOUSE</Card.Header>
            <Card.Body>
              {/* <Card.Title>Search company</Card.Title>
              <Card.Text>
                You can find all tips information about any company.
                Enter the name of the company in the search box to see the reported tips.
              </Card.Text> */}
              <Card.Title>A social income tracker for restaurant industry professionals
</Card.Title>
              <Card.Text>
              Pooled House allows servers, bartenders, and bussers to access a collaborative pool of tip data, 
              organized by date, time (AM or PM) and location in the NYC-Manhattan area. 
              
              Pooled House allows workers to better evaluate the financial viability of current or future 
              employers.

              </Card.Text>
              <Form></Form>
            </Card.Body>
          </Card>
          <br></br>
          <Card bg="info" text="white" style={{  }}>
            <Card.Header>See Companies in Map</Card.Header>
            <Card.Body>
              <Card.Title>Click on See Map to View Tips for different Locations</Card.Title>
              <Card.Text>
                Filter by Position, Day, Shift to see Locations.
                The Map shows All the Average Tips By Area / Neighborhood. Click on the 
              </Card.Text>
              <Form></Form>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
 export default WelcomePage;