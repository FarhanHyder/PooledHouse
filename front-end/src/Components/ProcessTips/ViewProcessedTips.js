// import all functions
// display based on the functions
import React from 'react';


const process = require('./ProcessTips');

const ViewTipsAverage = (props) => {
    // user selects the view option
    // function to process based on data called from above

    // form to select filter type for average tips/hour

    let tipsInfo = props.tipInfo;
    let view = [];
    if (props.process === "Business") {
        const processedTips = process.averageTipsByBusiness(tipsInfo);
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
        const processedTips = process.averageTipsByBusinessDay(tipsInfo);
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
       </div>);

    }

    else if (props.process === "Position"){
        const processedTips = process.averageTipsByPosition(tipsInfo);
        view = Object.keys(processedTips).map(bName => {
           console.log(bName);
           return (
               <div>
                  { console.log(processedTips[bName])}
                   <div className="dailyTipsAvg">
                       <div className="busTitle">{bName}</div>

                       <div>{Number.parseFloat(processedTips[bName].Bartender.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Server.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Barback.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Busser.tipsPerHour).toFixed(2)}</div>
                       <div>{Number.parseFloat(processedTips[bName].Other.tipsPerHour).toFixed(2)}</div>
                   </div>
               </div>
           );
       });

       view = (
       <div>
           <div className="dayName dailyTipsAvg">
                <div>Business Name</div>
                <div>Bartender</div>
                <div>Server</div>
                <div>Barback</div>
                <div>Busser</div>
                <div>Other</div>
           </div>
           <div>
               {view}
           </div>
       </div>);
    }
    else if (props.process === "Zip Code") {
        const processedTips = process.averageTipsByZipCode(tipsInfo);
        console.clear();
        console.log(processedTips);
        view = Object.keys(processedTips).map(zip => {
            console.log(zip);
            return (
                <div>
                   { console.log(processedTips[zip])}
                    <div className="zipTipsAvg">
                        <div className="ZipCode">{zip}</div>
                        <div>{processedTips[zip].business_count}</div>
                        <div>{Number.parseFloat(processedTips[zip].tipsPerHour).toFixed(2)}</div>
                    </div>
                </div>
            );
        });
 
        view = (
        <div>
            <div className="zipAvgPanel zipTipsAvg">
                 <div>Zip Code</div>
                 <div>Total Business</div>
                 <div>Average Tips</div>
            </div>
            <div>
                {view}
            </div>
        </div>);
    }

    return view;
}

export default ViewTipsAverage;