import React from 'react';
import './TipsHistory.css';

const TipsHistory = (props) => {
    const tips = props.tipsInfo;
    let view =tips.map(tips => {
        return (
            <div className="tipsHistory">
                <div>{tips.address}</div>
                <div>{tips.position}</div>
                <div>{tips.shift}</div>
                <div>${Number.parseFloat(tips.tips/tips.hour).toFixed(2)}</div>
            </div>
        );
    });

    return (
        <div>
            <div className="tipsHistory menu">
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