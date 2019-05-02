import React, { Component } from 'react';
import './App.css';

//local imports
import SignUp from './SignUp/SignUp.js';
import TipInfoForm from './Components/TipInfoForm/TipInfoForm';
import Map from './Components/Map/map.js';  

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

//for maps
import styled from 'styled-components';

// View Component
import ViewTipInfo from './Components/ViewTipInfo/ViewTipInfo';
import PositionOption from './Components/ViewTipInfo/PositionOption';
import './Components/ViewTipInfo/ViewTipInfo.css';
import ViewTipsAverage from './Components/ProcessTips/ProcessTips';
import ProcessOption from './Components/ProcessTips/ProcessOption';
import './Components/ProcessTips/ProcessTips.css';
import ViewUserTips from './Components/ViewTipInfo/UserTipInfo';
import ViewTipInfoList from './Components/ViewTipInfo/ViewTipInfoList';

//aws imports
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { Connect } from 'aws-amplify-react';
import aws_config from './aws-exports';

//graphql related imports
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import * as subscriptions from './graphql/subscriptions'

import logo from './images/logo.png'

Amplify.configure(awsmobile);
Amplify.configure(aws_config);

// component to get data from user / guest

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showHome: true,
      curr_user_username: '',
      // userProfile : "",
      showListView: false,
      showMapView: true,
      showMyTipsView: false,
      detailList: false,
      showUserTips: false,
      processFilter: "Business",
      positionFilter: "All Position"
    }

    this.handleProcess = this.handleProcess.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleMapView = this.handleMapView.bind(this);
    this.handleListView = this.handleListView.bind(this);
    this.handleMyTipsView = this.handleMyTipsView.bind(this);
  }
  
  handleProcess =(event) => {
    this.setState({
      processFilter : event.target.value
    })
  }

  handlePosition = (event) => {
    this.setState({
      positionFilter : event.target.value
    })
  }

  handleSignOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  handleHomeView = () => {
    this.setState({
      showHome: true,
      showSignUp: false,
      showTipUpdate: false,
      curr_user_username: '',
      // userProfile : "",
      showListView: false,
      showMapView: true,
      detailList: false,
      showUserTips: false,
      processFilter: "Business",
      positionFilter: "All Position",
      showMyTipsView: false,
    })
  }

  /////////new stuff

  handleMapView = () => {
    this.setState({
      showMapView: true,
      showListView: false,
      showMyTipsView: false
    })
  }

  handleListView = () => {
    this.setState({
      showMapView: false,
      showListView: true,
      showMyTipsView: false
    })
  }

  handleMyTipsView = () => {
    this.setState({
      showMapView: false,
      showListView: false,
      showMyTipsView: true
    })
  }

  /////////new stuff


  async componentDidMount() {
    let current_user = await Auth.currentAuthenticatedUser();
    let un = current_user.username;
    this.setState({
      // userProfile: current_user, // TODO
      curr_user_username: un
    })
  }

  render() {
    const home = (
      <Navbar className="bg-olive justify-content-between">

      <Navbar.Brand>
        <a href='#' onClick={this.handleHomeView}>
        <img 
        src={ logo }
        width="200"
        height="64"
        className="d-inline-block align-top"
        alt="Pooled House logo"
        />
        </a>

      </Navbar.Brand>
      
        <Form inline>
          <FormControl type="text" placeholder="ex: upper manhattan" className="mr-sm" />
          <Button type="submit" variant="outline-light"><span>{"\uD83D\uDD0D"}</span></Button>
        </Form>

        <ButtonGroup>
          <Button variant="warning" onClick={this.handleMapView}>Map</Button>
          <Button variant="warning" onClick={this.handleListView}>List</Button>
        </ButtonGroup>

        <ButtonToolbar>
          <Button id='ur_nav' onClick={this.handleMyTipsView}>
            My Tips
          </Button>
          <Button id='ur_nav' onClick={this.handleSignOut}>
            Sign Out
          </Button>
        </ButtonToolbar>
      </Navbar>
      );

      const viewData = (
        //the connect component queries our database
        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}>
        {({ data: { listTipEntrys }, loading, error }) => {
            if (error) return (<h3>Error</h3>);
            if (loading || !listTipEntrys) return (<h3>Loading...</h3>);
            return (
              <ViewTipInfoList 
                tip_info={listTipEntrys.items} />
            )
        }}
        </Connect>
      );

      let mapData = (
        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}>
        {({ data: { listTipEntrys }, loading, error }) => {
            if (error) return (<h3>Error</h3>);
            if (loading || !listTipEntrys) return (<h3>Loading...</h3>);
            return (
              <div>
                  <Map tip_info={listTipEntrys ? listTipEntrys.items : []} />
              </div>
            )
        }}
        </Connect>
      )

      const viewMyTips = (
        <div>
        <TipInfoForm />
        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}>
        {({ data: { listTipEntrys }, loading, error }) => {
            if (error) return (<h3>Error</h3>);
            if (loading || !listTipEntrys) return (<h3>Loading...</h3>);
            return (
              <ViewUserTips 
                tipInfo={listTipEntrys.items} 
                user={this.state.curr_user_username}
                />
            )
        }}
        </Connect>
        </div>
      )

    let multiView = '';

    if (this.state.showMapView) {
      multiView = mapData;
    } else if (this.state.showListView) {
      multiView = viewData;
    } else {
      multiView = viewMyTips;
    }

        {/*
        {this.state.showTipUpdate ? <TipInfoForm handler={this.handleTipUpdate}/> : null }
        {this.state.showListView ? <div id="listView"> {viewData} </div> : <div> {mapData} </div>}
        */}

    return (
      <div className="App">
        <div id="home"> { home } </div>
        <div> { multiView } </div>
      </div>
    );
  }
}

export default withAuthenticator(App);