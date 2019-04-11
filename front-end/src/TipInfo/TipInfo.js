import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const TipInfo = (props) => {
    return (
    <Container>
        <Form className="text-left newTips" onSubmit={()=>{console.log(props.name)}}>
            <Form.Group controlId="shiftDate">
                    <Form.Label>Shift Date</Form.Label>
                    <Form.Control
                        type='date'
                    />
            </Form.Group> 
            <Form.Group controlId="shiftAP">
                    <Form.Check inline label='AM' type='radio' name='rad' id='radio-AM' />
                    <Form.Check inline label='PM' type='radio' name='rad' id='radio-PM' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Shift Length (hours)</Form.Label>
                <Form.Control
                    type='number'
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tip Takehome</Form.Label>
                <Form.Control
                    type='number'
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Shift Location</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='i.e. 123 E 29th St, New York, New York, 99999'
                />
            </Form.Group>
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
            <Form.Group>

            </Form.Group>
            <Button variant="primary" type = "submit">Submit</Button>
        </Form>
    </Container>
    );
}

export default TipInfo;
