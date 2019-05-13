// react imports
import React, { Component } from 'react';
import './App.css';

//local imports
import TipInfoForm from './Components/TipInfoForm/TipInfoForm';
import Map from './Components/Map/map.js';  
import Search from './Components/Search/Search';
import ViewUserTips from './Components/ViewTipInfo/ViewUserTips';
import ViewTipInfoList from './Components/ViewTipInfo/ViewTipInfoList';
import UserAccountSummary from './Components/UserTips/UserAccountSummary';
import WelcomePage from './Components/ViewTipInfo/WelcomePage';

// react-bootstrap
import {Navbar,Nav, Form,FormControl,Button,ButtonToolbar,ButtonGroup,DropdownButton,Dropdown,Tabs,Tab} from 'react-bootstrap';

//aws imports
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator, Connect } from 'aws-amplify-react';
import aws_config from './aws-exports';

//graphql related imports
import * as queries from './graphql/queries'
import * as subscriptions from './graphql/subscriptions'

// logo
import logo from './images/logo.png'

Amplify.configure(awsmobile);
Amplify.configure(aws_config);

// component to get data from user / guest

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      curr_user_username: '',
      // userProfile : "",
      welcomeView: true,
      showListView: false,
      showMapView: false,
      showMyTipsView: false,
      showSearchView: false,
      addTips: false,
      userTipsTab: "viewMyTips",
      processFilter: "Business",
      positionFilter: "All Position"
    }

    this.handleMapView = this.handleMapView.bind(this);
    this.handleListView = this.handleListView.bind(this);
    this.handleMyTipsView = this.handleMyTipsView.bind(this);
    this.handleAddTips = this.handleAddTips.bind(this);
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  
  handleSignOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  handleHomeView = () => {
    this.setState({
      showSignUp: false,
      // userProfile : "",
      welcomeView: true,
      addTips: false,
      showListView: false,
      showMapView: false,
      showMyTipsView: false,
      search_query: ''
    })
    // window.location.reload();
  }

  handleMapView = () => {
    this.setState({
      welcomeView: false,
      addTips: false,
      showMapView: true,
      showListView: false,
      showMyTipsView: false,
      showSearchView: false
    })
  }

  handleListView = () => {
    this.setState({
      welcomeView: false,
      addTips: false,
      showMapView: false,
      showListView: true,
      showMyTipsView: false,
      showSearchView: false
    })
  }

  handleMyTipsView = () => {
    this.setState({
      welcomeView: false,
      addTips: false,
      showMapView: false,
      showListView: false,
      showMyTipsView: true,
      showSearchView: false
    })
  }

  handleAddTips = () => {
    this.setState({
      welcomeView: false,
      addTips: true,
      showMapView: false,
      showListView: false,
      showMyTipsView: false,
      showSearchView: false
    })
  }

  handleSearchQueryChange = (e) => {
    this.setState({
      search_query: e.target.value
    })
  }

  handleSearchSubmit = () => {
    this.setState({
      welcomeView: false,
      addTips: false,
      showMapView: false,
      showListView: false,
      showMyTipsView: false,
      showSearchView: true
    })
  }

  //updates db query with newly added items, used in subscriptions
  onNewTipEntry = (prevQuery, newData) => {
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listTipEntrys.items = 
      prevQuery.listTipEntrys.items.concat([newData.onCreateTipEntry]);
      return updatedQuery;
  }

  async componentDidMount() {
    let current_user = await Auth.currentAuthenticatedUser();
    let un = current_user.username;
    this.setState({
      // userProfile: current_user, // TODO
      curr_user_username: un
    })
  }

  render() {

    const search_query = this.state.search_query;

    const TopPanel = (
      <Navbar bg="success" sticky="top" z-index = '9999' variant="dark">
        <Navbar.Brand>
          <a href='#home' onClick={this.handleHomeView}> <img src={ logo } width="120" className="d-inline-block align-top"alt="Pooled House logo"/></a>
        </Navbar.Brand>
        
        <Nav className="mr-auto">
          <Nav.Link href="#home" onClick = {this.handleHomeView} >Home</Nav.Link>
          <Nav.Link href="#company" onClick = {this.handleListView}>Companies</Nav.Link>
          <Nav.Link href="#map" onClick = {this.handleMapView}>See Map</Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-button-drop-left">
          {this.state.curr_user_username}
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item href="#/action-1" onClick = {this.handleAddTips}>Add Tips</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick = {this.handleMyTipsView}>My Tips</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick = {this.handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
      </Navbar>
    );

      const viewData = (
        //the connect component queries our database
        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}
                 onSubscriptionMsg={this.onNewTipEntry}>
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
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}
                 onSubscriptionMsg={this.onNewTipEntry}>
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

        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}
                 onSubscriptionMsg={this.onNewTipEntry}>
        {({ data: { listTipEntrys }, loading, error }) => {
            if (error) return (<h3>Error</h3>);
            if (loading || !listTipEntrys) return (<h3>Loading...</h3>);
            return (
              <div>
                <h1> {this.state.curr_user_username} </h1>
                <Tabs
                  id="userTips"
                  activeKey={this.state.userTipsTab}
                  onSelect={userTipsTab => this.setState({ userTipsTab })}
                >           
                  <Tab eventKey="accountSummary" title="Your Tips Summary">
                    <UserAccountSummary 
                      tipInfo={listTipEntrys.items} 
                      user={this.state.curr_user_username}
                    />
                  </Tab>

  
                  <Tab eventKey="viewMyTips" title="All Your Entries">
                    <ViewUserTips 
                      tipInfo={listTipEntrys.items} 
                      user={this.state.curr_user_username}
                    />
                  </Tab>

                  <Tab eventKey="addNewTips" title="Add New Tips">
                    <TipInfoForm />
                  </Tab>

                </Tabs>
              </div>
            )
        }}
        </Connect>
      );

      const viewSearch = (
        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}
                 onSubscriptionMsg={this.onNewTipEntry}>
        {({ data: { listTipEntrys }, loading, error }) => {
          if (error) return (<h3>Error</h3>);
          if (loading || !listTipEntrys) return (<h3>Loading...</h3>);
          return (
            <div>
                <Search tip_info={listTipEntrys ? listTipEntrys.items : []} 
                        search_query={this.state.search_query} />
            </div>
          )
        }}
        </Connect>
      )

    let multiView = '';
    if (this.state.welcomeView){
      multiView = <WelcomePage/>
    } else if (this.state.showMapView) {
      multiView = mapData;
    } else if (this.state.showListView) {
      multiView = viewData;
    } else if (this.state.showSearchView) {
      multiView = viewSearch;
    } else if (this.state.addTips) {
      multiView = <TipInfoForm />;
    } else {
      multiView = viewMyTips;
    }

    return (
      <div className="App">
        <div id="home"> { TopPanel} </div>
        <div className="tipsView"> { multiView } </div>
      </div>
    );
  }
}

export default withAuthenticator(App);