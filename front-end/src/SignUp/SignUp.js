import React, { Component } from 'react';
import './SignUp.css';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


class SighUp extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    alert('Account for ' + this.input.value + " is created");
    e.preventDefault();
  }

  render() {
    return (
    <div>
      <Navbar className="bg-olive justify-content-between">
        <h3 className="text-color-white">Pooled House</h3>
        <ButtonToolbar>
          <Button href="#" variant="link" className="text-color-white" onClick={this.props.handler}>Home</Button>
        </ButtonToolbar>
      </Navbar>

      <form className='container' onSubmit={this.submit}>
        <label>First Name:
          <input type='text' name='FirstName' placeholder='First Name' required/>
        </label>
        <label>Last Name: 
          <input type='text' name='LastName' placeholder='Last Name' required/>
        </label>
        <label>Phone Number: 
          <input type='tel' name='Telephone' placeholder='Phone Number' required/>
        </label>
        <label>Username:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <label>Password: 
          <input type='password' name='Password' placeholder='Password' required/>
        </label>
        <label>Confirm Password: 
          <input type='password' name='ConfirmPassword' placeholder='Confirm Password' required/>
        </label>
        <input type="submit" value="Submit" className='button'/>
      </form>
    </div>);
  }
}

export default SighUp;
