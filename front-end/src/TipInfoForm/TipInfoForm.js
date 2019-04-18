import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Form, Button, ButtonToolbar, Navbar} from 'react-bootstrap';

class TipInfoForm extends React.Component {
    constructor(props) {
        super(props);
        //this.submit = this.submit.bind(this);
        this.state = {
            shift_length: '',
            shift_time: '',
            shift_date: '',
            position: 'Bartender',
            takehome: '',
            business_name: '',
            business_address: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        alert("submitted");
    }

    render () {
        const { shift_length, 
                shift_time,
                shift_date,
                position,
                takehome,
                business_name,
                business_address
            } = this.state;

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
                                    name="shift_date"
                                    value={shift_date}
                                    onChange={this.handleChange}
                                />
                            </Form.Group> 
                    </Col>
                    <Col>
                        <Form.Group controlId="shift_time">
                            <Form.Label>Shift Time</Form.Label>
                            { /*this div just helps with formatting */}
                            <div>
                                <Form.Check 
                                    inline label='AM' 
                                    type='radio' 
                                    name='shift_time' 
                                    id='radio-AM'
                                    value={shift_time}
                                    onChange={this.handleChange} />
                                <Form.Check 
                                    inline label='PM' 
                                    type='radio' 
                                    name='shift_time' 
                                    id='radio-PM'
                                    value={shift_time}
                                    onChange={this.handleChange} />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="shift_length">
                            <Form.Label>Shift Length (hours)</Form.Label>
                            <Form.Control
                                type='number'
                                name="shift_length"
                                value={shift_length}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="position">
                                <Form.Label>Position</Form.Label>
                                <Form.Control 
                                    as='select' 
                                    name="position" 
                                    value={position}
                                    onChange={this.handleChange}>
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
                                name="takehome"
                                value={takehome}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_name">
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. Hot Jim's BBQ"
                                name="business_name"
                                value={business_name}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_address">
                            <Form.Label>Business Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. 123 E 9th St, New York, NY 99999"
                                name="business_address"
                                value={business_address}
                                onChange={this.handleChange}
                            />
                            <Button variant="primary" type="submit">Submit</Button>
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
