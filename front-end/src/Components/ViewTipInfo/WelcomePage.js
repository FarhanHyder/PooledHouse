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
          <div>
            {/* <>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Pool</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">View Map</Nav.Link>
                </Nav>
                <Nav>
                <Form inline onSubmit={(event)=>{ event.preventDefault(); }}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange = {(event)=> {this.props.searchHandler(this.props.tipsInfo, event.target.value)}} />
                <Button variant="outline-info" >Search</Button>
                </Form>
                </Nav>
                <DropdownButton id="dropdown-basic-button" title="Me">
                    <Dropdown.Item href="#/action-1">My Tips</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>;
                
            </Navbar>
            </>; */}
          
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
        </div>
      );
    }
  }
  
 export default WelcomePage;