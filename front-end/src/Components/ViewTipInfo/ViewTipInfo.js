import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const ViewTipInfo = (props) => {

    // must fix filtered output
    
    // let position = 'Bartender';
    // <Form.Group onSubmit = {position = this.event.value}>
    //     <Form.Label>Position</Form.Label>
    //     <Form.Control as='select'>
    //         <option>Bartender</option>
    //         <option>Server</option>
    //         <option>Barback</option>
    //         <option>Busser</option>
    //         <option>Other</option>
    //     </Form.Control>
    // </Form.Group>
   
    // let filterdTipInfo = props.tipInfo.filter(tips => tips.position === position);

    let tipInfo = props.tipInfo.map( (tips, index) => {
        return (
            <div className="tipInfo">
                <div>Business Name : {tips.business_name}</div>
                <div>Address : {tips.business_address}</div>
                <div>Position: {tips.position}</div>
                <div>Tips : {tips.takehome}</div>
                <div>Hours Worked : {tips.shift_length}</div>
                <div>Work Shift : {tips.shift_time}</div>
                <div>Date : {tips.shift_date}</div>
            </div>
        );        
    });

    return tipInfo;
}

export default ViewTipInfo;