/**
 * ViewTipInfoList is a Component that is used for displaying either
 * your average tip data or a detailed tip data across the whole database.
 * It is currently being used in the My Tips profile page to display tipped
 * data. 
 * @summary This component shows either your tips or all tips.
 */

import React, { Component } from 'react'
// View Component
import ViewTipInfo from '././ViewTipInfo';
import PositionOption from './PositionOption';
//import './ViewTipInfo.css';
import ViewTipsAverage from '../ProcessTips/ViewProcessedTips';
import ProcessOption from '../ProcessTips/ProcessOption';
// import '../ProcessTips/ViewProcessedTips.css';
import ViewUserTips from './ViewUserTipInfo';
import ViewCompany from './ViewCompany';
import WelcomePage from './WelcomePage';

import {Form, FormControl, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const process = require('../ProcessTips/ProcessTips');

class ViewTipInfoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailList: false,
            processFilter: "Business",
            positionFilter: "All Position",
            welcomeView: true,
            searchView: false,
            companyView: false,
            tipsInfo: props.tip_info,
            allBusiness: process.createBusinessTable(props.tip_info),
            avgByBusiness : process.averageTipsByBusiness(props.tip_info),
            avgByLocation: process.averageTipsByBusinessByLocation(props.tip_info),
            avgByPosition: process.averageTipsByPosition(props.tip_info),
            avgByDay: process.averageTipsByBusinessDay(props.tip_info),
            avgByZip: process.averageTipsByZipCode(props.tip_info),
            BusinessName: "",
            SearchResults: Object.keys(process.createBusinessTable(props.tip_info)).sort()
        };

        this.searchHandler = this.searchHandler.bind(this);
        this.welcomeViewHandler = this.welcomeViewHandler.bind(this);
        this.searchViewHandler = this.searchViewHandler.bind(this);
        this.companyViewHandler = this.companyViewHandler.bind(this);
        // this.viewHandler = this.viewHandler.bind(this);
    }
    
    searchHandler = (tipsInfo, data) => {
      // let results = Object.keys(tipsInfo).sort();
      let results = tipsInfo.filter(tips => tips.business_name.toUpperCase().includes(data.toUpperCase()));
      this.setState({
        SearchResults: Object.keys(process.createBusinessTable(results)).sort(),
        defaultView: true,
        welcomeView: false,
        companyView: false,
        tipsInfo: results
      });
    }

    welcomeViewHandler = (name) => {
      this.setState({
        BusinessName: name,
        companyView: false,
        searchView: false,
        welcomeView: true
      })
    }

    searchViewHandler = (name) => {
      this.setState({
        BusinessName: name,
        companyView: false,
        searchView: true,
        welcomeView: false
      })
    }
    companyViewHandler = (name) => {
      this.setState({
        BusinessName: name,
        companyView: true,
        searchView: false,
        welcomeView: false
      })
    }


    render() {
      const defaultView = this.state.SearchResults.map(company => {
        return (
        <div className = "card avgTipsByBusiness bg-dark mb-3">
            <h5 className="card-header text-left text-white bg-success mb-3">{company}</h5>
            <div className="text-white text-right bg-dark mb-3">Average Tips: ${Number.parseFloat(this.state.avgByBusiness[company].tipsPerHour.toFixed(2))} / Hour</div>
            <button type="button" class="btn btn-outline-info" onClick = {()=> this.companyViewHandler(company)}>View details</button>    
        </div>);
    });
    
      return (
        <div className="container">
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline" onSubmit={(event)=>{ event.preventDefault(); this.searchViewHandler(this.state.BusinessName)}}>
              <input class="form-control mr-sm-2" type="search" placeholder="Search Company" aria-label="Search"
                onChange = {(event)=> {this.searchHandler(this.props.tip_info, event.target.value)}}
              />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
          <div className="">
            {
              this.state.welcomeView? <WelcomePage searchHandler = {this.searchHandler} tipsInfo = {this.props.tip_info}/> :
              this.state.companyView?
              <div className="card bg-white">
                <ButtonToolbar pullRight className="row">
                  <div className = "col-9"></div>
                  <ButtonGroup className="col-2" aria-label="Second group"><Button variant="secondary" onClick = {()=> {this.searchViewHandler(this.state.BusinessName)}}>Search results</Button></ButtonGroup>
                  <ButtonGroup className="col-1" aria-label="First group"><Button variant="primary" onClick ={()=> {this.welcomeViewHandler(this.state.BusinessName)}}>Back</Button></ButtonGroup>
                </ButtonToolbar>          
                <ViewCompany 
                  tipsInfo={this.state.tipsInfo} 
                  BusinessName = {this.state.BusinessName}
                  avgByBusiness = {this.state.avgByBusiness[this.state.BusinessName]}
                  locations = {this.state.avgByLocation[this.state.BusinessName]}
                  dailyTipsAvg = {this.state.avgByDay[this.state.BusinessName]}
                  avgByPosition = {this.state.avgByPosition[this.state.BusinessName]}
                  tipsHistory = {this.state.allBusiness[this.state.BusinessName]}

                />
                
              </div>
                :
                defaultView
            }
            
          </div>   
        </div>
      )
  };
}

export default ViewTipInfoList;
