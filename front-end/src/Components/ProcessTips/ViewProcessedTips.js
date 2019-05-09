/**
 * @file ViewProcessedTips calls the ViewTipsAverage component to take the 
 * information from the database and compute the average tips based
 * on filter preferences.
 */
// import all functions
// display based on the functions
import React from 'react';
import {averageTipsByBusiness, averageTipsByBusinessDay} from './ProcessTips';

const ViewTipsAverage = (props) => {
    // user selects the view option
    // function to process based on data called from above

    // form to select filter type for average tips/hour

    let tipsInfo = props.tipInfo;
    let view = [];
    if (props.process === "Business") {
        const processedTips = averageTipsByBusiness(tipsInfo);
        view = Object.keys(processedTips).map(tips => {
            return (
            <div className ="tipsByBusiness">
                <div>
                    <h2 className="busTitle">{processedTips[tips].business_name}</h2>
                    <div className="addr">{processedTips[tips].business_street_address}</div>
                </div>
                <div>Tips : ${Number.parseFloat(processedTips[tips].tipsPerHour).toFixed(2)}/Hour</div>
            </div>);
        });

    }
    
    else if (props.process === "Daily Average") {
        const processedTips = averageTipsByBusinessDay(tipsInfo);
        view = Object.keys(processedTips).map(bName => {
           console.log(bName);
           return (
               <div>
                  { console.log(processedTips[bName])}
                   <div className="dailyTipsAvg">
                       <div className="busTitle">{bName}</div>

                       <div>{Number.parseFloat(processedTips[bName].Saturday.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Sunday.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Monday.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Tuesday.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Wednesday.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Thursday.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Friday.tipsPerHour).toFixed(2)}</div>
                   </div>
               </div>
           );
       });

       view = (
       <div>
           <div className="dayName dailyTipsAvg">
                <div>Business Name</div>
                <div>Saturday</div>
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
           </div>
           <div>
               {view}
           </div>
       </div>)

    }

    return view;
}

export default ViewTipsAverage;