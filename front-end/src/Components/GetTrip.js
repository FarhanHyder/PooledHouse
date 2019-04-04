import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const getTipsData = (props) => {
    <Form className="text-left newTips" onSubmit={props.data}>
        <Form.Group controlId="tipData">

            <div className="inputBlock">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Job Title"
                    value={}
                    onChange={/* function to update state*/}/>
            </div>

            <div className="inputBlock">
            
            </div>

            <div className="inputBlock">

            </div>

        </Form.Group>
        <Button variant="primary" type = "submit">Submit</Button>
    </Form>
}

export default getTipsData;
