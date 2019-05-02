import React from 'react';

// View Component
import ViewTipInfo from '././ViewTipInfo';
import PositionOption from './PositionOption';
import './ViewTipInfo.css';
import ViewTipsAverage from '../ProcessTips/ViewProcessedTips';
import ProcessOption from '../ProcessTips/ProcessOption';
import '../ProcessTips/ProcessTips.css';
import ViewUserTips from '././UserTipInfo';

class ViewTipInfoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailList: false,
            processFilter: "Business",
            positionFilter: "All Position",
        };

        this.handleProcess = this.handleProcess.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
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

    render() {

        const buttons = (
            <div>
              <button type="primary" onClick={()=>{this.setState({detailList : false, showUserTips: false})}}>View Average Tip Data</button>
              <button type="primary" onClick={()=>{this.setState({detailList : true, showUserTips: false})}}>View Detailed Tip Data</button>
            </div> 
        )

        if(this.state.detailList) {
            return  ( 
              <div>
                {buttons}   
                <PositionOption position={this.handlePosition}/>
                <ViewTipInfo tipInfo={this.props.tip_info} position={this.state.positionFilter} />
              </div>
              );
          }
          else {
            return  (
              <div>
                {buttons}   
                <ProcessOption process = {this.handleProcess}/>
                <ViewTipsAverage tipInfo={this.props.tip_info} process = {this.state.processFilter} />
              </div>);
          }
    };
}

export default ViewTipInfoList;