import React from 'react';
import {Navbar, Nav, FormControl, Form, Button, Dropdown} from 'react-bootstrap';

const TopPanel = (props) => {
  const view = (
    <Navbar bg="primary" sticky="top" z-index = '9999' variant="dark">
      <Navbar.Brand href="#home">Pooled House</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" onClick = {props.home} >Home</Nav.Link>
        <Nav.Link href="#company" onClick = {props.companyView}>Companies</Nav.Link>
        <Nav.Link href="#map" onClick = {props.mapView}>See Map</Nav.Link>
      </Nav>
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-button-drop-left">
          {props.user}
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1" onClick ={props.addNewTips}>Add Tips</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick = {props.myTips}>My Tips</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick = {props.signOut}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    </Navbar>
  );
  return view;
}

export default TopPanel;