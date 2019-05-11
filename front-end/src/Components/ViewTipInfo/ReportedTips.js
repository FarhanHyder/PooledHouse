// import all functions
// display based on the functions
import React from 'react';
import ViewBarChart from './ViewBarChart';

const ReportedTips = (props) => {
    const view = (
        <div className="container">
            
            
            <div className="row">
                <div className="col-2 position-left">
                    <p>Average Tips</p>
                    <div className="btn-group-vertical position-left">
                        <button type="button" class="btn btn-info" onClick >By Day</button>
                        <button type="button" class="btn btn-dark" onClick >By Position</button>
                        <button type="button" class="btn btn-secondary" onClick >By Shift</button>
                    </div>
                </div>
                <div className="col-8">
                    <div>Average Tips Reported : $ / Hour</div>
                    <div>Average Tips in this Zip Code: $ / Hours</div>
                    <div>Average in this neighborhood</div>
                    <div>Average Tips for different Position</div>
                </div>
               
            </div>
            <div className="col-12">
                    <ViewBarChart
                    dailyTipsAvg = {props.dailyTipsAvg}
                    avgByPosition = {props.avgByPosition}
                    />
            </div>
            
        </div>
    );
    return view;
}

export default ReportedTips;