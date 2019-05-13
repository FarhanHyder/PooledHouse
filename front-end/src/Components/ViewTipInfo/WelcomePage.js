/** 
 * @class WelcomePage
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
            <Card.Header>Welcome to Pooled House</Card.Header>
            <Card.Body>
              {/* <Card.Title>Search company</Card.Title>
              <Card.Text>
                You can find all tips information about any company.
                Enter the name of the company in the search box to see the reported tips.
              </Card.Text> */}
              <Card.Title>A social income tracker for restaurant industry professionals
</Card.Title>
              <Card.Text>
                Pooled House allows restaurant industry professionals to share information about their
                tip earnings with other professionals. The app allows users to keep track of their income,
                and share with it with others to help workers gain better insight to where the most money
                is made across their city.

                Search by location or business to see where the most money is made. 
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