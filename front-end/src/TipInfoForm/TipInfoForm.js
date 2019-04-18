import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Form, Button, ButtonToolbar, Navbar} from 'react-bootstrap';

class TipInfoForm extends React.Component {
    constructor(props) {
        super(props);
        //this.submit = this.submit.bind(this);
        this.state = {
            shift_length: null,
            shift_time: '',
            shift_date: '',
            position: '',
            takehome: null,
            business_name: '',
            business_address: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return (
            <div>
        <Navbar className="bg-olive justify-content-between">
            <h3 className="text-color-white">Pooled House</h3>
            <ButtonToolbar>
                <Button href="#" variant="link" className="text-color-white" onClick={this.props.handler}>Home</Button>
            </ButtonToolbar>
        </Navbar>
        <Container fluid='true'>
            <Form className="text-left newTips" onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlID="shift_date">
                                <Form.Label>Shift Date</Form.Label>
                                <Form.Control
                                    type='date'
                                />
                            </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group controlId="shift_time">
                            <Form.Label>Shift Time</Form.Label>
                            { /*this div just helps with formatting */}
                            <div>
                                <Form.Check inline label='AM' type='radio' name='rad' id='radio-AM' />
                                <Form.Check inline label='PM' type='radio' name='rad' id='radio-PM' />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="shift_length">
                            <Form.Label>Shift Length (hours)</Form.Label>
                            <Form.Control
                                type='number'
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="position">
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
                        <Form.Group controlID="takehome">
                            <Form.Label>Tip Takehome</Form.Label>
                            <Form.Control
                                type='number'
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_name">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. Hot Jim's BBQ"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_address">
                            <Form.Label>Business Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. 123 E 9th St, New York, NY 99999"
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

export default TipInfoForm;
