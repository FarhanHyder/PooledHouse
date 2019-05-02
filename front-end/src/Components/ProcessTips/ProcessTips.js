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
import { all } from 'q';

const averageTipsByBusiness = (tipsInfo) => {
    // let tipInfo = [...props.tipInfo];
    const business = {};
    tipsInfo.forEach(tips => {
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

const getDay = (date) => {
    let day = date.getDay();
    if(day === 0) {
        return "Sunday";
    }
    else if (day === 1) {
        return "Monday";
    }
    else if (day === 2) {
        return "Tuesday";
    }
    else if (day === 3) {
        return "Wednesday"
    }
    else if (day === 4) {
        return "Thursday";
    }
    else if (day === 5) {
        return "Friday";
    }
    else if (day === 6) {
        return "Sunday";
    }
}

const averageTipsByBusinessDay = (tipsInfo) => {
    const businessTipsByday = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        let day = getDay(new Date(tips.shift_date));
        if (! businessTipsByday.hasOwnProperty(businessName)) {
            let avg = {
                        tipsPerHour: (tips.takehome / tips.shift_length),
                        totalHour: tips.shift_length,
                    };
                    
            businessTipsByday[businessName] = {
                Saturday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Sunday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Monday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Tuesday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Wednesday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Thursday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Friday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                }
            }; 

            businessTipsByday[businessName][day] = avg;
            businessTipsByday[businessName].address = tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip;
        }
        else {
            // if(!businessTipsByday[businessName].hasOwnProperty(day)) {


            // }
            let hours = (businessTipsByday[businessName][day].totalHour + tips.shift_length);
            businessTipsByday[businessName][day].tipsPerHour = businessTipsByday[businessName][day].tipsPerHour * businessTipsByday[businessName][day].totalHour / hours + tips.takehome / hours;
            businessTipsByday[businessName].totalHour = hours;
        }
    });
    return businessTipsByday;
}

const averageTipsByPosition = (props) => {

}

const averageTipsByZipCode = (props) => {

}

const averageTipsByPositionAndShift = (props) => {

}

export {averageTipsByBusiness, averageTipsByBusinessDay};
