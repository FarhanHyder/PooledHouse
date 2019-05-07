// import all functions
// display based on the functions
import React from 'react';

const ReportedTips = (props) => {
    const view = (
        <div>
            <div>Average Tips Reported : $ / Hour</div>
            <div>Average Daily Tips in this Zip Code: $ / Hours</div>
            <div>Average Tips for different Position</div>
        </div>
    );
    return view;
}

export default ReportedTips;