import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Form, Button, ButtonToolbar, Navbar} from 'react-bootstrap';

import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";
import * as mutations from '../../graphql/mutations';

class TipInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            shift_length: '',
            shift_time: 'AM',
            shift_date: '',
            shift_position: 'Bartender',
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

    async handleSubmit(e) {
        e.preventDefault();
        let t_e = {
            id: (Math.floor(Math.random() * 100000)),
            user: this.state.user,
            shift_length: this.state.shift_length,
            shift_time: this.state.shift_time,
            shift_date: this.state.shift_date,
            shift_position: this.state.shift_position,
            takehome: this.state.takehome,
            business_name: this.state.business_name,
            business_address: this.state.business_address
        }
        console.log(t_e);
        try {
            await API.graphql(graphqlOperation(mutations.createTipEntry, {input: t_e}));
            console.log('successfully created tipentry');
            console.log(t_e);
            alert("successfully added tipentry");
            this.setState({
                user: '',
                shift_length: '',
                shift_time: 'AM',
                shift_date: '',
                shift_position: 'Bartender',
                takehome: '',
                business_name: '',
                business_address: '',
            })
        } catch (err) {
            console.log('error creating tipentry: ', err);
            alert("tipentry failed");
        }
    }

    async componentDidMount() {
        let current_user = await Auth.currentAuthenticatedUser();
        let un = current_user.username;
        this.setState({
          user: un
        })
      }

    render () {

        const { shift_length, 
                shift_time,
                shift_date,
                shift_position,
                takehome,
                business_name,
                business_address
            } = this.state;

        return (
            <div>
        <Container fluid='true'>
            <Form className="text-left newTips">
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
                            <Form.Control 
                                    as='select' 
                                    name="shift_time" 
                                    value={shift_time}
                                    onChange={this.handleChange}>
                                    <option>AM</option>
                                    <option>PM</option>
                                </Form.Control>
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
                        <Form.Group controlID="shift_position">
                                <Form.Label>Position</Form.Label>
                                <Form.Control 
                                    as='select' 
                                    name="shift_position" 
                                    value={shift_position}
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
                            <Button 
                                variant="primary" 
                                type="submit" 
                                onClick={(ev) => this.handleSubmit(ev)}>Submit
                            </Button>
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
