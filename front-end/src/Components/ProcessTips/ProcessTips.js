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
// business_address

import React from 'react';

const averageTipsByBusiness = (tipInfo) => {
    // let tipInfo = [...props.tipInfo];
    const business = new Object();
    tipInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business[businessName] = {business_name: businessName,
                                    business_address: tips.business_address, 
                                    tipsPerHour: (tips.takehome / tips.shift_length),
                                    totalHour: tips.shift_length};
        }
        else {
            let hours = (business[businessName].totalHour + tips.shift_length);
            business[businessName].tipsPerHour = business[businessName].tipsPerHour * business[businessName].totalHour / hours + tips.takehome / hours;
            business[businessName].totalHour = hours;
        }
        console.log(business.businessName);
    });
    console.log(business);
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
    let viewSelect = "Business";
    // form to select filter type for average tips/hour

    if (viewSelect === "Business") {
        let tipsInfo = props.tipInfo;
        let allBusiness = averageTipsByBusiness(tipsInfo);
        console.log(Object.keys(allBusiness));
        let view = Object.keys(allBusiness).map(tips => {
            return (<div>
                <div>{allBusiness[tips].business_name}</div>
                <div>{allBusiness[tips].business_address}</div>
                <div>{allBusiness[tips].tipsPerHour}</div>
            </div>);
        });
        return view;
    }
    
    // else ...
}

export default ViewTipsAverage;