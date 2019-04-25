import React from 'react';


// TODO: function sort 

export const sortTips = (tipInfo) => {

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