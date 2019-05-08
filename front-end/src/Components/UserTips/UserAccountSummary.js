
import React from 'react';
import { Table, Container } from 'react-bootstrap';

const UserAccountSummary = (props) => {
    let userTips =  props.tipInfo.filter(tips => tips.user === props.user);

    let tEntries=0, tTakeHome = 0, tHoursWorked=0;
    Object.keys(userTips).map(key => {
        tEntries += 1;
        tTakeHome += userTips[key].takehome;
        tHoursWorked += userTips[key].shift_length;
    });

    
    let tipInfo = (
        <Container fluid>
            <div>
                Total Entries: 
            </div>
        </Container>
    );

    return tipInfo;
}

export default UserAccountSummary;