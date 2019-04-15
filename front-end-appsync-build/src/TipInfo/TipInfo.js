import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Form, Button, ButtonToolbar, Navbar} from 'react-bootstrap';

class TipInfo extends React.Component {
    constructor(props) {
        super(props);
        //this.submit = this.submit.bind(this);
    }

    render () {
        return (
            <div>
        <Container fluid='true'>
            <Form className="text-left newTips"> {/*onSubmit={()=>{console.log(props.name)}*/}
                <Row>
                    <Col>
                        <Form.Group controlId="shiftDate">
                                <Form.Label>Shift Date</Form.Label>
                                <Form.Control
                                    type='date'
                                />
                            </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group controlId="shiftAP">
                            <Form.Label>Shift Time</Form.Label>
                            { /*this div just helps with formatting */}
                            <div>
                                <Form.Check inline label='AM' type='radio' name='rad' id='radio-AM' />
                                <Form.Check inline label='PM' type='radio' name='rad' id='radio-PM' />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Shift Length (hours)</Form.Label>
                            <Form.Control
                                type='number'
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                                <Form.Label>Position</Form.Label>
                                <Form.Control as='select'>
                                    <option>Bartender</option>
                                    <option>Server</option>
                                    <option>Barback</option>
                                    <option>Busser</option>
                                    <option>Other</option>
                                </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tip Takehome</Form.Label>
                            <Form.Control
                                type='number'
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Shift Location</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='i.e. 123 E 29th St, New York, New York, 99999'
                            />
                            <Button variant="primary" type = "submit">Submit</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
        </div>
        );
    }
}

export default TipInfo;
