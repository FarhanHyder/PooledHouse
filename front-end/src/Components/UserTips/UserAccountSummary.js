
import React from 'react';
import { Container, Card, CardGroup, CardDeck } from 'react-bootstrap';
import {roundUp} from './UserAccountSummarFunctions';

const UserAccountSummary = (props) => {
    let userTips =  props.tipInfo.filter(tips => tips.user === props.user);

    let tEntries=0, tTakeHome = 0, tHoursWorked=0;
    Object.keys(userTips).map(key => {
        tEntries += 1;
        tTakeHome += userTips[key].takehome;
        tHoursWorked += userTips[key].shift_length;
    });

    const userAverage = roundUp((tTakeHome/tHoursWorked),2);

    
    let tipInfo = (
        <Container fluid>
            <div>
            <br></br>
            <CardDeck>
                <Card bg="secondary" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Your Total Entries</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h1>{tEntries}</h1>
                            </Card.Text>
                        </Card.Body>
                </Card>

                <Card bg="secondary" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Your Total Take Home</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h1>${tTakeHome}</h1>
                            </Card.Text>
                        </Card.Body>
                </Card>

                <Card bg="secondary" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Your Hours Worked</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h1>{tHoursWorked}</h1>
                            </Card.Text>
                        </Card.Body>
                </Card>

                <Card bg="secondary" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Your Daily Average</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h1>${userAverage}</h1>
                            </Card.Text>
                        </Card.Body>
                </Card>

            </CardDeck>

            </div>
        </Container>
    );

    return tipInfo;
}

export default UserAccountSummary;