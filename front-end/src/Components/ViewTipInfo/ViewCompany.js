import React, { Component } from 'react';
import Description from './CompanyDescription';
import ReportedTips from './ReportedTips';
import TipsHistory from './TipsHistory';
const process = require('../ProcessTips/ProcessTips');

class ViewCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            BusinessName: props.BusinessName,
            ViewDescription: true,
            ViewTipsInfo: false,
            ViewTipsHistory: false,
        }
        this.companyViewHandler = this.companyViewHandler.bind(this);
        this.descriptionViewHandler = this.descriptionViewHandler.bind(this);
        this.tipsInfoViewHandler = this.tipsInfoViewHandler.bind(this);
        this.tipsHistoryViewHandler = this.tipsHistoryViewHandler.bind(this);
    }

    companyViewHandler = () => {
        this.setState({CompanyView : !this.state.CompanyView});
    };

    descriptionViewHandler = () => {
        this.setState({
            ViewDescription: true,
            ViewTipsInfo: false,
            ViewTipsHistory: false
        });
    };
    tipsInfoViewHandler = () => {
        this.setState({
            ViewDescription: false,
            ViewTipsInfo: true,
            ViewTipsHistory: false
        });
    };
    tipsHistoryViewHandler = () => {
        this.setState({
            ViewDescription: false,
            ViewTipsInfo: false,
            ViewTipsHistory: true
        });
    };

    render(){
        const Company = (
            <div className = "">
                {/* <div className="card"> */}
                <div className="position-left">
                    <h2 className="card-title text-white bg-success rounded-lg">{this.state.BusinessName}</h2>
                    <div className = "row">
                        <div className="col-6 btn-group">
                            <button type="button" class="btn btn-info" onClick = {this.descriptionViewHandler}>Description</button>
                            <button type="button" class="btn btn-dark" onClick = {this.tipsInfoViewHandler}>Tips Information</button>
                            <button type="button" class="btn btn-secondary" onClick = {this.tipsHistoryViewHandler}>Tips History</button>
                        </div>
                        <p className=" col-4 text-success position-right">Average Tips ${Number.parseFloat(this.props.avgByBusiness.tipsPerHour.toFixed(2))}</p>
                    </div>
                </div>
               {/* </div> */}
                <div className="row">
                    {
                        this.state.ViewDescription?
                        <Description
                            business = {this.state.BusinessName}
                            locations = {this.props.locations}
                        /> :
                        (this.state.ViewTipsInfo?
                        <ReportedTips
                            business = {this.state.BusinessName}
                            locations = {this.props.locations}
                            dailyTipsAvg = {this.props.dailyTipsAvg}
                            avgByPosition = {this.props.avgByPosition}
                        /> : 
                        
                        <TipsHistory
                            tipsInfo = {this.props.tipsHistory}
                        />)
                    }
                </div>
            </div>
        );
        
        return Company;
    }
}

export default ViewCompany;
