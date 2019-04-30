// import all functions
// display based on the functions
import React from 'react';
import {averageTipsByBusiness} from './ProcessTips';

const ViewTipsAverage = (props) => {
    // user selects the view option
    // function to process based on data called from above

    // form to select filter type for average tips/hour

    let tipsInfo = props.tipInfo;

    let processedTips = [];
    if (props.process === "Business") {
        processedTips = averageTipsByBusiness(tipsInfo);
    }
    
    let view = Object.keys(processedTips).map(tips => {
        return (
        <div className ="tipsByBusiness">
            <div>
                <h2 className="busTitle">{processedTips[tips].business_name}</h2>
                <div className="addr">{processedTips[tips].business_street_address}</div>
            </div>
            <div>Tips : ${Number.parseFloat(processedTips[tips].tipsPerHour).toFixed(2)}/Hour</div>
        </div>);
    });

    // return view;
    return view;
}

export default ViewTipsAverage;