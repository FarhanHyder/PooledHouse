import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';
import TipInfo from './TipInfo/TipInfo';
// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Container from 'react-bootstrap/Container'

// component to get data from user / guest

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showHome: true,
      showSignUp: false,
      showTipUpdate: false,
    }

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleTipUpdate = this.handleTipUpdate.bind(this);
  }

  handleSignUp = () => {
    this.setState({
      showHome: !this.state.showHome,
      showSignUp: !this.state.showSignUp
    });
  }

  handleTipUpdate = () => {
    this.setState({
      showHome: !this.state.showHome,
      showTipUpdate: !this.state.showTipUpdate
    })
  }

  render() {

    const home = (
      <Navbar className="bg-olive justify-content-between">

        {/* TODO: update the logo with Navbar.Brand */}
        <h3 className="text-color-white">Pooled House</h3>

        <Form inline>
          <FormControl type="text" placeholder="ex: upper manhattan" className="mr-sm" />
          <Button type="submit" variant="outline-light"><span>{"\uD83D\uDD0D"}</span></Button>
        </Form>

        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1} variant="warning">Map View</ToggleButton>
            <ToggleButton value={2} variant="warning">List View</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        
        <ButtonToolbar>
          <Button 
            href="#" variant="link" className="text-color-white" 
            onClick={this.handleTipUpdate}>Tip Update
          </Button>
          <Button 
            href="#" variant="link" className="text-color-white" 
            onClick={this.handleSignUp}>Sign Up
          </Button>
          <Button 
            href="#" variant="link" className="text-color-white">Log In
          </Button>
        </ButtonToolbar>
      </Navbar>
      );
/*

attempt to streamline multiple conditional views...unsuccessful.

    function whichView(tu_h, su_h, TU, SU) {
      if (TU === true) {
        return <TipInfo handler={tu_h}/>;
      } else if (SU === true) {
        return <SignUp handler={su_h}/>;
      } else {
        return home;
      }
    }
*/ 
    return (
      <div className="App">
        {this.state.showSignUp ? <SignUp handler={this.handleSignUp} /> : <div id="home">{home}</div>}
        {this.state.showTipUpdate ? <TipInfo handler={this.handleTipUpdate}/> : null }
      </div>
    );
  }
}

export default App;
