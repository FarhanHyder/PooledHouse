import React from 'react';
import {Button, Form} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'


const ViewTipInfo = (props) => {

    // must fix filtered output
    
    let position = '';
   
   
    let filterdTipInfo = position.length > 0? props.tipInfo.filter(tips => tips.position === position) : props.tipInfo;

    let tipInfo = filterdTipInfo.map( (tips, index) => {
        return (
            <div className="tipInfo">
                <h2 className="busTitle">{tips.business_name}</h2>
                <div className="addr">{tips.business_address}</div>
                <div>Position: {tips.shift_position}</div>
                <div>Tips : ${tips.takehome}</div>
                <div>Hours Worked : {tips.shift_length}</div>
                <div>Work Shift : {tips.shift_time}</div>
                <div>Date : {tips.shift_date}</div>
            </div>
        );        
    });

    return (
        // TODO: move the selector to the App.js
        <div>
            <Form  onSubmit = {()=> {position = this.event.value}}>
            <Form.Group>
            <Form.Label>Position</Form.Label>
                <Form.Control as='select'>
                    <option>All Position</option>
                    <option>Bartender</option>
                    <option>Server</option>
                    <option>Barback</option>
                    <option>Busser</option>
                    <option>Other</option>
                    </Form.Control>
                <Button variant="primary" type = "submit">Submit</Button>
            </Form.Group>
            </Form>
            {tipInfo}
        </div>
    );
}

export default ViewTipInfo;
