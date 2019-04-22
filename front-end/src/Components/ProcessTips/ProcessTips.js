// data will be process here
// filter all the data based on business name
// take the average
// for each position
// tips total = takeHome * hour
// average total by total employee count

// shift_length
// shift_time
// shift_date
// shift_position
// takehome
// business_name
// business_address

import React from 'react';
import {Button, Form} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'

const averageTipsByBusiness = (tipInfo) => {
    // let tipInfo = [...props.tipInfo];
    const business = new Object();
    tipInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business[businessName] = {business_name: businessName,
                                    business_address: tips.business_address, 
                                    tipsPerHour: (tips.takehome / tips.shift_length),
                                    totalHour: tips.shift_length};
        }
        else {
            let hours = (business[businessName].totalHour + tips.shift_length);
            business[businessName].tipsPerHour = business[businessName].tipsPerHour * business[businessName].totalHour / hours + tips.takehome / hours;
            business[businessName].totalHour = hours;
        }
    });
    return business;
}

const averageTipsByPosition = (props) => {

}

const averageTipsByZipCode = (props) => {

}

const averageTipsByPositionAndShift = (props) => {

}

const ViewTipsAverage = (props) => {
    // user selects the view option
    // function to process based on data called from above
    let viewSelect = "Business";
    // form to select filter type for average tips/hour
    let tipsInfo = props.tipInfo;
    let processedTips = null;

    if (viewSelect === "Business") {
        processedTips = averageTipsByBusiness(tipsInfo);
    }
    
    let view = Object.keys(processedTips).map(tips => {
        return (
        <div className ="tipsByBusiness">
            <div className="busTitle">{processedTips[tips].business_name}</div>
            <div className="addr">{processedTips[tips].business_address}</div>
            <div>Tips : ${Number.parseFloat(processedTips[tips].tipsPerHour).toFixed(2)}/Hour</div>
        </div>);
    });
    // return view;
    return (
        // TODO: move the selector to the App.js
        <div>
            <Form  onSubmit = {()=>{viewSelect = this.event.value}}>
                <Form.Group>
                    <Form.Label>Select Option to View Average Tips by </Form.Label>
                    <Form.Control as='select'>
                        <option>Business</option>
                        <option>Positon</option>
                        <option>Neighborhood</option>
                        <option>Highest Average Tips</option>
                        <option>Lowest Average Tips</option>
                    </Form.Control>
                    <Button variant="primary" type = "submit">Submit</Button>
                </Form.Group>
            </Form>
            {view}
        </div>);
    
    // else ...
}

export default ViewTipsAverage;