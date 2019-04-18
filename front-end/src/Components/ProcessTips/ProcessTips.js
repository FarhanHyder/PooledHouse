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

const averageTipsByBusiness = (props) => {
    const business = [];
    props.tipInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business.businessName = {tipsPerHour: (tips.takehome / tips.shift_length), totalHour: tips.shift_length};
        }
        else {
            let hours = (business.businessName.totalHour + tips.shift_length);
            business.businessName.tipsPerHour = business.businessName.tipsPerHour * business.businessName.totalHour / hours + tips.takehome / hours;
            business.businessName.totalHour = hour;
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

}