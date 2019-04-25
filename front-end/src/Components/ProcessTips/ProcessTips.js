// data will be process here
// filter all the data based on business name
// take the average
// for each position
// tips total = takeHome * hour
// average total by total employee count

// shift_length
// shift_time
// shift_date
// shift_position
// takehome
// business_name
// business_street_address
// business_city
// business_state
// business_zip

import React from 'react';

export const averageTipsByBusiness = (tipInfo) => {
    // let tipInfo = [...props.tipInfo];
    const business = new Object();
    tipInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business[businessName] = {business_name: businessName,
                                    business_street_address: tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip, 
                                    tipsPerHour: (tips.takehome / tips.shift_length),
                                    totalHour: tips.shift_length};
        }
        else {
            let hours = (business[businessName].totalHour + tips.shift_length);
            business[businessName].tipsPerHour = business[businessName].tipsPerHour * business[businessName].totalHour / hours + tips.takehome / hours;
            business[businessName].totalHour = hours;
        }
    });
    return business;
}

const averageTipsByPosition = (props) => {

}

const averageTipsByZipCode = (props) => {

}

const averageTipsByPositionAndShift = (props) => {

}

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
            <div className="busTitle">{processedTips[tips].business_name}</div>
            <div className="addr">{processedTips[tips].business_street_address}</div>
            <div>Tips : ${Number.parseFloat(processedTips[tips].tipsPerHour).toFixed(2)}/Hour</div>
        </div>);
    });

    // return view;
    return view;
}

export default ViewTipsAverage;