import React, { Component } from 'react';
import Description from './CompanyDescription';

class ViewCompany extends Component {
    constructor(){
        super();
        this.state = {
            CompanyView: false,
            Description: true,
            TipsInfo: false,
            TipsHistory: false
        }
        this.companyViewHandler = this.companyViewHandler.bind(this);
        this.descriptionViewHandler = this.descriptionViewHandler.bind(this);
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


    render(){
        const Company = (
            <div>
                <div className="menu">
                    <button type="primary" onClick={this.companyViewHandler}>Company Name</button>
                    <button type="primary" onClick = {this.descriptionViewHandler}>Description</button>
                    <button>Reported Tips</button>
                    <button>Tips History</button>
                </div>
                <div>
                    {this.state.Description? <Description/> : null}
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
