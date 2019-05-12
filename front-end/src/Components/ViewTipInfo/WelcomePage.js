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
          <div className = "container, fluid">     
          <Card bg="info" text="white" style={{  }}>
            <Card.Header>Welcome to Pooled House</Card.Header>
            <Card.Body>
              <Card.Title>Search company</Card.Title>
              <Card.Text>
                You can find all tips information about any company.
                Enter the name of the company in the search box to see the reported tips.
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