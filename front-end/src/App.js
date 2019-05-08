import React, { Component } from 'react';
import './App.css';

//local imports
import TipInfoForm from './Components/TipInfoForm/TipInfoForm';
import Map from './Components/Map/map.js';  
import Search from './Components/Search/Search';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tabs from 'react-bootstrap/Tabs';

// View Component
// import ViewTipInfo from './Components/ViewTipInfo/ViewTipInfo';
// import PositionOption from './Components/ViewTipInfo/PositionOption';
// import './Components/ViewTipInfo/ViewTipInfo.css';
// import './Components/ProcessTips/ViewProcessedTips.css';
import ViewUserTips from './Components/ViewTipInfo/ViewUserTips';
import ViewTipInfoList from './Components/ViewTipInfo/ViewTipInfoList';
// import UserTips from './Components/UserTips/UserTips';

//aws imports
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { Connect } from 'aws-amplify-react';
import aws_config from './aws-exports';

//graphql related imports
import * as queries from './graphql/queries'
import * as subscriptions from './graphql/subscriptions'

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

        <ButtonToolbar>

          <Button id='ur_nav' onClick={this.handleMyTipsView}>
              My Account
          </Button>

          {/* <Button id='ur_nav' onClick={this.handleMyTipsView}>
          {this.state.curr_user_username}'s Tips
          </Button> */}

          <Button id='ur_nav' onClick={this.handleSignOut}>
            Sign Out
          </Button>
        </ButtonToolbar>
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


      //FIXME: this need to be moved or changed
      const viewMyTips = (
        <div>
        hello world
        
        <Tabs
          id="userTips"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >

        </Tabs>
        
        <TipInfoForm />
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