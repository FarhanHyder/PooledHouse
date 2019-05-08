/**
 * @file ViewUserTips component to display all the tips data by the userInfo
 * @module ViewUserTips 
 */

import React from 'react';
import { Table, Container } from 'react-bootstrap';

const ViewUserTips = (props) => {
    let userTips =  props.tipInfo.filter(tips => tips.user === props.user);

    // let filterdUserTips = props.position !== "All Position"? userTips.filter(tips => tips.shift_position === props.position) : tipInfo;
    
    let tipInfo = (
        <Container fluid>
            <div>

            <Table>
                <thead>
                    <tr>
                        <th>Business</th>
                        <th>Neighborhood</th>
                        <th>Hourly Avg $</th>
                    </tr>
                </thead>
                <tbody>
                    { Object.keys(userTips).map(key => {
                        return (
                            <tr>
                                <td>{ userTips[key].business }</td>
                                <td>{ userTips[key].neighborhood }</td>
                                <td>{ Math.floor(userTips[key].tipsPerHour) }</td>
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