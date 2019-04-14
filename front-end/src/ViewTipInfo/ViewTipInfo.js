import React from 'react';

const ViewTipInfo = (props) => {
    let tipInfo = props.tipsInfo.map( (tips, index) => {
        if(tips.position === props.position) {
            return (
                <div className="tipInfo">
                    <div>Business Name : {tips.business_name}</div>
                    <div>Address : {tips.business_address}</div>
                    <div> Tips : {tips.takehome}</div>
                    <div>Hours Worked : {tips.shift_length}</div>
                    <div>Work Shift : {tips.shift_time}</div>
                    <div>Date : {tips.shift_date}</div>
                </div>
            );
        }          
    });

    return tipInfo;
}

export default ViewTipInfo;