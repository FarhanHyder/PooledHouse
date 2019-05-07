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
import './ViewTipInfo.css';
import ViewTipsAverage from '../ProcessTips/ViewProcessedTips';
import ProcessOption from '../ProcessTips/ProcessOption';
import '../ProcessTips/ViewProcessedTips.css';
import ViewUserTips from '././UserTipInfo';
import ViewCompany from './ViewCompany';

import Form from 'react-bootstrap/Form';


// import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }


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
            allBusiness: process.createBusinessTable(props.tip_info),
            avgByBusiness : process.averageTipsByBusiness(props.tip_info),
            avgByLocation: process.averageTipsByBusinessByLocation(props.tip_info),
            avgByPosition: process.averageTipsByPosition(props.tip_info),
            avgByDay: process.averageTipsByBusinessDay(props.tip_info),
            avgByZip: process.averageTipsByZipCode(props.tip_info),
            BusinessName: "Test",
            SearchResults: Object.keys(process.createBusinessTable(props.tip_info)).sort()
        };

        this.handleProcess = this.handleProcess.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.viewHandler = this.viewHandler.bind(this);
    }
    
    handleProcess = (event) => {
        this.setState({
          processFilter : event.target.value
        })
      }

    handlePosition = (event) => {
        this.setState({
          positionFilter : event.target.value
        })
    }
    
    searchHandler = (tipsInfo, data) => {
      let results = Object.keys(process.createBusinessTable(tipsInfo)).sort();
      results = results.filter(name => name.toUpperCase().includes(data.toUpperCase()));
      this.setState({
        SearchResults: results,
        companyView: false
      });
    }

    viewHandler = (name) => {
      this.setState({
        BusinessName: name,
        companyView: true
      })
    }
    render() {
      const tipsInfo = this.props.tip_info;
      // all processed value
      const businessAvg = process.averageTipsByBusiness(tipsInfo);
      
      const buttons = (
          <div>
            <button type="primary" onClick={()=>{this.setState({detailList : false, showUserTips: false})}}>View Average Tip Data</button>
            <button type="primary" onClick={()=>{this.setState({detailList : true, showUserTips: false})}}>View Detailed Tip Data</button>
          </div> 
      )

      const defaultView = this.state.SearchResults.map(company => {
        return (
        <div className ="avgTipsByBusiness tipsByBusiness">
            <h3 className="busTitle">{this.state.avgByBusiness[company].business_name}</h3>
            {/* <div className="addr">{avgByBusiness[tips].business_street_address}</div> */}
            <div>Tips:${Number.parseFloat(this.state.avgByBusiness[company].tipsPerHour).toFixed(2)}/Hour</div>
            <button type="primary" onClick = {()=> this.viewHandler(this.state.avgByBusiness[company].business_name)}>View details</button>    
        </div>);
    });
      // if(this.state.detailList) {
      //     return  ( 
      //       <div>
      //         {buttons}   
      //         <PositionOption position={this.handlePosition}/>
      //         <ViewTipInfo tipInfo={this.props.tip_info} position={this.state.positionFilter} />
      //       </div>
      //       );
      //   }
      //   else {
      //     return  (
      //       <div>
      //         {buttons}   
      //         <ProcessOption process = {this.handleProcess}/>
      //         <ViewTipsAverage tipInfo={this.props.tip_info} process = {this.state.processFilter} />
      //       </div>);
      //   }
      return (
        <div className="ViewListCompany">
          <div className="searchBar">
            <div className="filter-Business">
              <form>
                <fieldset className="form-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Search Company"
                    onChange = {(event)=> {this.searchHandler(tipsInfo, event.target.value)}}
                  />
                </fieldset>
              </form>
            </div>
          </div>
          <div>
            {this.state.companyView? 
              <ViewCompany 
                tipsInfo={tipsInfo} 
                BusinessName = {this.state.BusinessName}
                tipsHistory = {this.state.allBusiness[this.state.BusinessName]}
              /> :
              defaultView
            }
          </div>   
        </div>
      )
  };
}

export default ViewTipInfoList;