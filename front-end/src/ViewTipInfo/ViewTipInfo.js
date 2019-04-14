import React from 'react';

const ViewTipInfo = (props) => {
    let tipInfo = props.tipsInfo.map( (tips, index) => {
        if(tips.position === props.position) {
            return (
                <div className="tipInfo">
                    <div>{tips.business_name}, {tips.business_address}</div>
                    <div>{tips.takehome}, {tips.shift_length}</div>
                </div>
            );
        }          
    });

    return tipInfo;
}

export default ViewTipInfo;