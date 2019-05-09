import React from 'react';


const Description = (props) => {
    const locations = Object.keys(props.locations).map(loc => {
        return (
            <div>
                <div>{loc}</div>
            </div>
        )
    });
    
    const desc = (
        <div>
            <div>
                <p>Reported Locations</p>
                <div>
                    {locations}
                </div>
            </div>
            <div>All Reported Position</div>
            <div>Average tips for this Company</div>
        </div>
    );
    return desc;
};


export default Description;