import React from 'react';

const TipsHistory = (props) => {
    const tips = props.tipsInfo;
    let view =tips.map(tips => {
        return (
            <div className="row border border-primary rounded-lg">
                <div className="col-4">{tips.address}</div>
                <div className="col-2">{tips.position}</div>
                <div className="col-2">{tips.shift}</div>
                <div className="col-2">{tips.hour} Hours</div>
                <div className="col-2">${tips.tips}</div>
            </div>
        );
    });

    return (
        <div className="card container">
            <div className=" card-title row border border-success rounded-lg">
                <div className="col-4">Locations</div>
                <div className="col-2">Position</div>
                <div className="col-2">Shift</div>
                <div className="col-2">Hours Worked</div>
                <div className="col-2">Tips</div>
            </div>
            {view}
        </div>
    );
}

export default TipsHistory;