import React from 'react';


const Description = (props) => {
    const locations = Object.keys(props.locations).map(loc => {
        return (
            <div className="row border border-primary rounded-lg">
                <div className="col-4">{loc}</div>
                <div className="col-2">${Number.parseFloat(props.locations[loc].tipsPerHour.toFixed(2))} / Hour</div>  
            </div>
        )
    });
    
    const desc = (
        <div className="container card">
            <div className=" card-title row border border-success rounded-lg">
                <div className="col-4">Company Locations</div>
                <div className="col-2">Average Tips</div>
            </div>
            {locations}
            {/* <div>All Reported Position</div>
            <div>Average tips for this Company</div> */}
        </div>
    );
    return desc;
};


export default Description;