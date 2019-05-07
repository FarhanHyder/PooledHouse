import React from 'react';

// component to display all the tips data by the userInfo

const ViewUserTips = (props) => {
    let userTips =  props.tipInfo.filter(tips => tips.user === props.user);

    // let filterdUserTips = props.position !== "All Position"? userTips.filter(tips => tips.shift_position === props.position) : tipInfo;
    
    let tipInfo = userTips.map( (tips, index) => {
        return (
            <div className="tipInfo">
                <h2 className="busTitle">{tips.business_name}</h2>
                <div className="addr">{tips.business_address}</div>
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

export default ViewUserTips;