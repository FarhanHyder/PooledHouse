/**
 * This stateless component  is used in parallel with the ProcessTips component
 * within the ViewTipInfoList. It is used to help display the users tips in the 
 * profile page.
 */
import React from 'react';


// TODO: function sort 

export const sortTips = (tipInfo) => {

}

export const createBusinessTable =  (tipsInfo) => {
    const business = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business[businessName] = [{
                // business_name: businessName,
                business_street_address: tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip, 
                Position: tips.shift_position,
                Tips : tips.takehome,
                Hour : tips.shift_length,
                Shift : tips.shift_time,
                date : tips.shift_date}];
        }
        else {
            business[businessName].push({
                // business_name: businessName,
                business_street_address: tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip, 
                Position: tips.shift_position,
                Tips : tips.takehome,
                Hour : tips.shift_length,
                Shift : tips.shift_time,
                date : tips.shift_date
            });
        }
    });
    return business;
}
// output style
// |Business Name |
// |address |
// |position name : Tips|
// |position name : Tips|
// .....
const ViewTipInfo = (props) => {

    // must fix filtered output

    let filterdTipInfo = props.position !== "All Position"? props.tipInfo.filter(tips => tips.shift_position === props.position) : props.tipInfo;
    // TODO : sort all tips into object business name as key
    // 
    console.log(createBusinessTable( filterdTipInfo));
    let tipInfo = filterdTipInfo.map( (tips, index) => {
        return (
            <div className="tipInfo">
                <h2 className="busTitle">{tips.business_name}</h2>
                <div className="addr">{tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip}</div>
                <div>Position: {tips.shift_position}</div>
                <div>Tips : ${tips.takehome}</div>
                <div>Hours Worked : {tips.shift_length}</div>
                <div>Work Shift : {tips.shift_time}</div>
                <div>Date : {tips.shift_date}</div>
            </div>
        );        
    });

    return tipInfo;
}

export default ViewTipInfo;