/**
 * @file ViewUserTips component to display all the tips data by the userInfo
 * @module ViewUserTips 
 */

import React from 'react';
import { Table, Container } from 'react-bootstrap';

const ViewUserTips = (props) => {
    let userTips =  props.tipInfo.filter(tips => tips.user === props.user);
    
    let tipInfo = (
        <Container fluid>
            <div>
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
                    { Object.keys(userTips).map(key => {
                        return (
                            <tr>
                                <td>{ userTips[key].business_name }</td>
                                <td>{ userTips[key].neighborhood }</td>
                                <td>{ userTips[key].shift_position }</td>
                                <td>{ userTips[key].takehome }</td>
                                <td>{ userTips[key].shift_length }</td>
                                <td>{ userTips[key].shift_time }</td>
                                <td>{ userTips[key].shift_date }</td>
                                
                            </tr>
                        )
                    }) }
                </tbody>
            </Table>
            </div>
        </Container>
    );

    return tipInfo;
}

export default ViewUserTips;