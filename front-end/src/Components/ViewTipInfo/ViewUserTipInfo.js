/**
 * @class ViewUserTips helps with displaying the tips the user has searched for.
 */

import React from 'react';
import { Table } from 'react-bootstrap';

// component to display all the tips data by the userInfo

const ViewUserTips = (props) => {
    let userTips =  props.tipInfo.filter(tips => tips.user === props.user);

    // let filterdUserTips = props.position !== "All Position"? userTips.filter(tips => tips.shift_position === props.position) : tipInfo;
    
    let tipInfo = userTips.map( (tips, index) => {
        return (
            <div>
                {/* <h2 className="busTitle">{tips.business_name}</h2>
                <div className="addr">{tips.business_address}</div>
                <div>Position: {tips.shift_position}</div>
                <div>Tips : ${tips.takehome}</div>
                <div>Hours Worked : {tips.shift_length}</div>
                <div>Work Shift : {tips.shift_time}</div>
                <div>Date : {tips.shift_date}</div> */}

                <Table>
                    <thead>
                        <tr>
                            <th>Business</th>
                            <th>Neighborhood</th>
                            <th>Shift</th>
                            <th>Takehome</th>
                            <th>Shift Length</th>
                            <th>Shift Time</th>
                            <th>Shift Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{tips.business_name}</th>
                            <th>{tips.neighborhood}</th>
                            <th>{tips.shift_position}</th>
                            <th>{tips.takehome}</th>
                            <th>{tips.shift_length}</th>
                            <th>{tips.shift_time}</th>
                            <th>{tips.shift_date}</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );        
    });

    return tipInfo;
}

export default ViewUserTips;