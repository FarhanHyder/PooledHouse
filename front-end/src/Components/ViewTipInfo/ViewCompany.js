import React, { Component } from 'react';
import Description from './CompanyDescription';

import TipsHistory from './TipsHistory';

const process = require('../ProcessTips/ProcessTips');

class ViewCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            BusinessName: "",
            CompanyView: false,
            Description: true,
            TipsInfo: false,
            TipsHistory: false,
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
            Description: true,
            TipsInfo: false,
            TipsHistory: false
        });
    };
    tipsInfoViewHandler = () => {
        this.setState({
            Description: false,
            TipsInfo: true,
            TipsHistory: false
        });
    };
    tipsHistoryViewHandler = () => {
        this.setState({
            Description: false,
            TipsInfo: false,
            TipsHistory: true
        });
    };

    render(){
        // const tipsInfo = this.props.tipsInfo.filter(tips => (tips.business_name.includes(this.state.BusinessName)));
        // const processedTips = process.averageTipsByBusiness(tipsInfo);
        // console.log(processedTips);
        const Company = (
            <div>
                <div className="menu">
                    <button type="primary" onClick={this.companyViewHandler}>Company Name</button>
                    <button type="primary" onClick = {this.descriptionViewHandler}>Description</button>
                    <button type="primary" onClick = {this.tipsInfoViewHandler}>Full Reported Tips</button>
                    <button type="primary" onClick = {this.tipsHistoryViewHandler}>Tips History</button>
                </div>
                <div className="companyProfile">
                    {this.state.Description? <Description business = {this.state.BusinessName}/> : null}
                    {this.state.TipsHistory? <TipsHistory tipsInfo = {this.props.tipsInfo}/>: null}
                </div>
            </div>
        );

        const AllCompanies = (
        <div>
            <button type="primary" onClick={this.companyViewHandler}><div>Company Name</div> <div>Reported Average Tips</div></button>
        </div>
        );
        
        const view = (
        <div>
            {this.state.CompanyView? Company : AllCompanies}
        </div>);
        return view;
    }
}

export default ViewCompany;
