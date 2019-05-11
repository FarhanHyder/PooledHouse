/**
 * ProcessOptions component is used to create a dropdown menu for displaying
 * Average Tips. This menu allows you to select which  value you'd like to 
 * display average tip by.
 * @return ProcessOption
 */

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


