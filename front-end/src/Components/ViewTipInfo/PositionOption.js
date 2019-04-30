import React from 'react';
import {Form} from 'react-bootstrap';

const PositionOption = (props) => {
    let positionOption = (
        <Form>
            <Form.Group>
              <Form.Label>View Tips By Job</Form.Label>
              <Form.Control
              as='select'
              onChange = {(event)=>{props.position(event)}}>
                <option>All Position</option>
                <option>Bartender</option>
                <option>Server</option>
                <option>Barback</option>
                <option>Busser</option>
                <option>Other</option>
            </Form.Control>
            </Form.Group>
        </Form>
      );
      return positionOption;
}

export default PositionOption;


