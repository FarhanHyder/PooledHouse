import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const getTipsData = (props) => {
    return (
    <Form className="text-left newTips" onSubmit={()=>{console.log(props.name)}}>
        <Form.Group controlId="tipData">

            <div className="inputBlock">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                    type="text"
                    required
                    placeholder="Enter Your Job Title"
                    // value={}
                    // onChange={/* function to update state*/}
                    />
            </div>

            <div className="inputBlock">
                <Form.Label>Tips Info</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Tips you received in the past week"
                    required
                    // value={}
                    // onChange={/* function to update state*/}
                    />
            </div>

            <div className="inputBlock">

            </div>

        </Form.Group>
        
        <Button variant="primary" type = "submit">Submit</Button>
    </Form>
    );
}

export default getTipsData;
