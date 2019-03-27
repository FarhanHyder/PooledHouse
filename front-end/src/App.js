import React, { Component } from 'react';
import './App.css';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar className="bg-olive justify-content-between">
        <Navbar.Brand href="#home">Pooled House</Navbar.Brand>

          <Button type="" variant="">Change View</Button>

          <Form inline>
            <FormControl type="text" placeholder="ex: upper manhattan" className=" mr-sm-2" />
            <Button type="submit" variant="outline-info">Search</Button>
          </Form>
          

          <Button type="" variant="">Create New Account</Button>
          <Button type="" variant="">Log In</Button>
          
      </Navbar>

      </div>
    );
  }
}

export default App;
