import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Table, Button, Card, Form} from 'react-bootstrap';

import { searchParse } from './searchFunctions'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 'All',
            shift: 'All',
            position: 'All',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.day);
    }
    
      handleReset = () => {
        this.setState(
          { 
            day: 'All',
            shift: 'All',
            position: 'All'
          }
        )
      }

    render() {

        const { day, shift, position } = this.state;

        const tip_info = this.props.tip_info;
        const search_query = this.props.search_query;
        const raw_results = searchParse(tip_info, search_query, 
                                        this.state.day, this.state.shift, 
                                        this.state.position);

        const filter = (
            <Card bg='light'>
            <Card.Body>
            <Form className="text-left filter">
              <Form.Row>
                  <Form.Group controlID="day" as={Col} md='4'>
                    <Form.Label>Day</Form.Label>
                      <Form.Control 
                        as='select' 
                        name="day" 
                        value={day}
                        onChange={this.handleChange}>
                        <option>All</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group conrolID="shift" as={Col} md='4'>
                    <Form.Label>Shift</Form.Label>
                      <Form.Control
                        as='select'
                        name='shift'
                        value={shift}
                        onChange={this.handleChange}>
                        <option>All</option>
                        <option>AM</option>
                        <option>PM</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlID="position" as={Col} md='4'>
                    <Form.Label>Position</Form.Label>
                      <Form.Control
                        as='select'
                        name='position'
                        value={position}
                        onChange={this.handleChange}>
                        <option>All</option>
                        <option>Bartender</option>
                        <option>Server</option>
                        <option>Host</option>
                        <option>Busser</option>
                        <option>Other</option>
                      </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Row>
                  <Col md='4'></Col>
                <Button 
                  as={Col} 
                  md='4'
                  variant="primary" 
                  type="reset" 
                  onClick={this.handleReset}>Reset Filter
                </Button>
                <Col md='4'></Col>
                </Row>
            </Form>
            </Card.Body>
            </Card>
        );
        
        if (Object.keys(raw_results).length == 0) {
            return (
                <Container fluid>
                <div>
                { filter } 
                <p>No results found.</p> 
                </div>
                </Container>
            )
        } else {
            return (
                <Container fluid>
                <div>
                { filter } 
                <Table>
                    <thead>
                        <tr>
                            <th>Business</th>
                            <th>Neighborhood</th>
                            <th>Hourly Avg $</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.keys(raw_results).map(key => {
                            return (
                                <tr>
                                    <td>{ raw_results[key].business }</td>
                                    <td>{ raw_results[key].neighborhood }</td>
                                    <td>{ Math.floor(raw_results[key].tipsPerHour) }</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </Table>
                </div>
                </Container>
            );
        }
    }
}

export default Search;