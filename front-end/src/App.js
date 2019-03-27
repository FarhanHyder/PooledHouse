import React, { Component } from 'react';
import './App.css';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar className="bg-olive justify-content-between">

        {/* TODO: update the logo with Navbar.Brand */}
        <h3 className="text-color-white">Pooled House</h3>

        <Form inline>
          <FormControl type="text" placeholder="ex: upper manhattan" className="mr-sm" />
          <Button type="submit" variant="outline-light">Search</Button>
        </Form>
        
        <ButtonToolbar>
          <Button type="submit" value="ChangeView" variant="link" className="text-color-white">Change View</Button>
          <Button href="#" variant="link" className="text-color-white">Create New Account</Button>
          <Button href="#" variant="link" className="text-color-white">Log In</Button>
        </ButtonToolbar>
          
      </Navbar>

      </div>
    );
  }
}

export default App;
