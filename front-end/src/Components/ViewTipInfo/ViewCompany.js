import React, { Component } from 'react';

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
    }

    companyViewHandler = () => {
        this.setState({CompanyView : !this.state.CompanyView})
    }
    render(){
        const Company = (
            <div>
                <button type="primary" onClick={this.companyViewHandler}>Company Name</button>
                <button>Description</button>
                <button>Reported Tips</button>
                <button>Tips History</button>
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
