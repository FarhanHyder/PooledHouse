import React from 'react';
import {Form} from 'react-bootstrap';

const ProcessOption = (props) => {
    let processOption = (
        <Form>
            <Form.Group>
              <Form.Label>View Average Tips By </Form.Label>
              <Form.Control
              as='select'
              onChange = {(event)=>{props.process(event)}}>
                  <option>Business</option>
                  <option>Daily Average</option>
                  <option>Position</option>
                  <option>Neighborhood</option>
                  <option>Highest Average Tips</option>
                  <option>Lowest Average Tips</option>
              </Form.Control>
            </Form.Group>
        </Form>
      );

      return processOption;
}

export default ProcessOption;


