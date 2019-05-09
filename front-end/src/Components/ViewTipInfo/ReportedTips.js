// import all functions
// display based on the functions
import React from 'react';
import ViewBarChart from './ViewBarChart';

const ReportedTips = (props) => {
    const view = (
        <div className="container card">
            <div>Average Tips Reported : $ / Hour</div>
            <div>Average Daily Tips in this Zip Code: $ / Hours</div>
            <div>Average Tips for different Position</div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-7"> <ViewBarChart dailyTipsAvg = {props.dailyTipsAvg}/> </div>
            </div>
            
        </div>
    );
    return view;
}

export default ReportedTips;