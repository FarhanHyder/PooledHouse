// react imports
import React, { Component } from 'react';
import './App.css';

//local imports
import TipInfoForm from './Components/TipInfoForm/TipInfoForm';
import Map from './Components/Map/map.js';  
import Search from './Components/Search/Search';
import ViewUserTips from './Components/ViewTipInfo/ViewUserTips';
import ViewTipInfoList from './Components/ViewTipInfo/ViewTipInfoList';

// react-bootstrap
import {Navbar,Form,FormControl,Button,ButtonToolbar,ButtonGroup,DropdownButton,Dropdown,Tabs,Tab} from 'react-bootstrap';

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
      showListView: false,
      showMapView: true,
      showMyTipsView: false,
      showSearchView: false,
      detailList: false,
      userTipsTab: "viewMyTips",
      processFilter: "Business",
      positionFilter: "All Position"
    }

    this.handleProcess = this.handleProcess.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleMapView = this.handleMapView.bind(this);
    this.handleListView = this.handleListView.bind(this);
    this.handleMyTipsView = this.handleMyTipsView.bind(this);
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
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
      showSignUp: false,
      // userProfile : "",
      showListView: false,
      showMapView: true,
      detailList: false,
      processFilter: "Business",
      positionFilter: "All Position",
      showMyTipsView: false,
      search_query: ''
    })
  }

  handleMapView = () => {
    this.setState({
      showMapView: true,
      showListView: false,
      showMyTipsView: false,
      showSearchView: false
    })
  }

  handleListView = () => {
    this.setState({
      showMapView: false,
      showListView: true,
      showMyTipsView: false,
      showSearchView: false
    })
  }

  handleMyTipsView = () => {
    this.setState({
      showMapView: false,
      showListView: false,
      showMyTipsView: true,
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

    const search_query = this.state.search_query

    const welcomeMsg = "Hello, "+this.state.curr_user_username;
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
          <FormControl value={ search_query } type="text" 
                       placeholder="ex: upper manhattan" className="mr-sm" 
                       onChange={ this.handleSearchQueryChange } />
          <Button variant="outline-light" onClick={ this.handleSearchSubmit }><span>{"\uD83D\uDD0D"}</span></Button>
        </Form>

        <ButtonGroup>
          <Button variant="warning" onClick={this.handleMapView}>Map</Button>
          <Button variant="warning" onClick={this.handleListView}>List</Button>
        </ButtonGroup>

        <ButtonGroup>
          
          <DropdownButton as={ButtonGroup} title={welcomeMsg} id="bg-nested-dropdown">
            <Dropdown.Item eventKey="tipsView" onClick={this.handleMyTipsView} >View My Tips</Dropdown.Item>
            <Dropdown.Item eventKey="signOut" onClick={this.handleSignOut}>Sign Out</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
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
        <div>
       <h1> {this.state.curr_user_username} </h1>

        <Tabs
          id="userTips"
          activeKey={this.state.userTipsTab}
          onSelect={userTipsTab => this.setState({ userTipsTab })}
        >
          <Tab eventKey="viewMyTips" title="View My Tips">
              <Connect query={graphqlOperation(queries.listTipEntrys)}
                        subscription={graphqlOperation(subscriptions.onCreateTipEntry)}
                        onSubscriptionMsg={this.onNewTipEntry}>
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
            </Tab>

            <Tab eventKey="addNewTips" title="Add New Tips">
                 <TipInfoForm />
            </Tab>

        </Tabs>

        </div>
      )

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

    if (this.state.showMapView) {
      multiView = mapData;
    } else if (this.state.showListView) {
      multiView = viewData;
    } else if (this.state.showSearchView) {
      multiView = viewSearch;
    } else {
      multiView = viewMyTips;
    }

    return (
      <div className="App">
        <div id="home"> { home } </div>
        <div className="tipsView"> { multiView } </div>
      </div>
    );
  }
}

export default withAuthenticator(App);