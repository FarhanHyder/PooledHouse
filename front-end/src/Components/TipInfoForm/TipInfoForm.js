import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';

import { API, graphqlOperation, Auth } from "aws-amplify";
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
            business_street_address: '',
            business_city: '',
            business_state: '', 
            business_zip: '',
            neighborhood: '',
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
            business_street_address: this.state.business_street_address,
            business_city: this.state.business_city,
            business_state: this.state.business_state,
            business_zip: this.state.business_zip,
            neighborhood: this.state.neighborhood,
        }
        console.log(t_e);
        try {
            await API.graphql(graphqlOperation(mutations.createTipEntry, {input: t_e}));
            console.log(t_e);
            alert("Success!");
            this.setState({
                user: '',
                shift_length: '',
                shift_time: 'AM',
                shift_date: '',
                shift_position: 'Bartender',
                takehome: '',
                business_name: '',
                business_street_address: '',
                business_city: '', 
                business_state: '',
                business_zip: '',
                neighborhood: ''
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

        const neighborhoods = [ 'Battery Park City', 'Central Harlem', 'Central Park',
                                'Chelsea', 'Chinatown', 'City Hall Area', 'East Village',
                                'Ellis Island', 'Financial District', 'Flatiron District',
                                'Governors Island', 'Gramercy', 'Greenwich Village', 'Hamilton Heights',
                                "Hell's Kitchen", 'Inwood', 'Kips Bay', 'Liberty Island', 'Little Italy',
                                'Lower East Side', 'Marble Hill', 'Midtown East', 'Midtown West', 'Morningside Heights',
                                'Murray Hill', 'NoHo', 'Nolita', "Randall's Island", 'Roosevelt Island', 
                                'SoHo', 'Spanish Harlem', 'Stuyvesant Town', 'Tribeca', 'Two Bridges', 'Upper East Side',
                                'Upper West Side', 'Washington Heights', 'West Village'
                               ];
        
        let hoodlist = [];

        neighborhoods.forEach(function(neighborhood) {
            hoodlist.push({ label: neighborhood, value: neighborhood })
        })

        const { shift_length, 
                shift_time,
                shift_date,
                shift_position,
                takehome,
                business_name,
                business_street_address,
                business_city,
                business_state,
                business_zip,
                neighborhood
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
                        <Form.Group controlID="business_street_address">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. 123 E 9th St"
                                name="business_street_address"
                                value={business_street_address}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. New York City"
                                name="business_city"
                                value={business_city}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. NY"
                                name="business_state"
                                value={business_state}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="business_zip">
                            <Form.Label>Zipcode</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="i.e. 11105"
                                name="business_zip"
                                value={business_zip}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlID="neighborhood">
                                <Form.Label>Neighborhood</Form.Label>
                                <Form.Control 
                                    as='select' 
                                    name="neighborhood" 
                                    value={neighborhood}
                                    onChange={this.handleChange}>
                                    { neighborhoods.map((neighborhood, index) => {
                                        return (
                                            <option key={index} value={neighborhood}>{neighborhood}</option>
                                        )
                                    })}
                                </Form.Control>
                                <Button 
                                variant="primary" 
                                type="submit" 
                                onClick={(ev) => this.handleSubmit(ev)}>Add Tips
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
