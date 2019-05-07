/**
 * ViewTipInfoList is a Component that is used for displaying either
 * your average tip data or a detailed tip data across the whole database.
 * It is currently being used in the My Tips profile page to display tipped
 * data. 
 * @summary This component shows either your tips or everyone's tips.
 */

import React from 'react';

// View Component
import ViewTipInfo from '././ViewTipInfo';
import PositionOption from './PositionOption';
import './ViewTipInfo.css';
import ViewTipsAverage from '../ProcessTips/ViewProcessedTips';
import ProcessOption from '../ProcessTips/ProcessOption';
import '../ProcessTips/ViewProcessedTips.css';
import ViewUserTips from '././UserTipInfo';
import ViewCompany from './ViewCompany';

const process = require('../ProcessTips/ProcessTips');

class ViewTipInfoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailList: false,
            processFilter: "Business",
            positionFilter: "All Position",
            BusinessName: "",
            processedTips: {}
        };

        this.handleProcess = this.handleProcess.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.tipsProcessHandler = this.tipsProcessHandler.bind(this);
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

    tipsProcessHandler = (tipsInfo) => {
      const newProcessedTips = this.state.processedTips;
      newProcessedTips.averageTipsByBusiness = process.averageTipsByBusiness(tipsInfo);
      console.log(newProcessedTips.averageTipsByBusiness);
      this.setState({
        processedTips: newProcessedTips
      });
    }

    render() {
      const tipsInfo = this.props.tip_info.filter(tips => (tips.business_name.includes(this.state.BusinessName)));
      

      const buttons = (
          <div>
            <button type="primary" onClick={()=>{this.setState({detailList : false, showUserTips: false})}}>View Average Tip Data</button>
            <button type="primary" onClick={()=>{this.setState({detailList : true, showUserTips: false})}}>View Detailed Tip Data</button>
          </div> 
      )

      // const BusinessTable = 
    
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
        <div>
          {/* {this.tipsProcessHandler(tipsInfo)} */}
          <ViewCompany tipsInfo={tipsInfo}/>
        </div>
      )
  };
}

export default ViewTipInfoList;