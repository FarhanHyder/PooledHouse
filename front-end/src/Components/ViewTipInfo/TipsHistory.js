import React from 'react';

const TipsHistory = (props) => {
    const tips = props.tipsInfo;
    let view =tips.map(tips => {
        return (
            <div>
                <div>{tips.business_street_address}</div>
                <div>{tips.shift_position}</div>
                <div>{tips.shift_time}</div>
                <div>${Number.parseFloat(tips.takehome/tips.shift_length).toFixed(2)}</div>
            </div>
        );
    });

    return (
        <div>
            <div>
                <div>Locations</div>
                <div>Position</div>
                <div>Shift</div>
                <div>Tips</div>
            </div>
            {view}
        </div>
    );
}

export default TipsHistory;