import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const LoginPage = () => {
    return(
        <Container>
            <Row>
                <Col md="6">
                    <form>
                        <p className ="h4 text-center mb-4">Log In</p>
                        <label className="grey-text">user name</label>
                        <input 
                        type="username"
                        id=""
                        className="form-control"
                        />
                        <br />
                        <label>password</label>
                        <input 
                        type="password"
                        id=""
                        className="form-control"
                        />
                        <h6><a href = "">Forgot password?</a></h6>
                        <div className="text-center mt-4">
                            <Button color="indigo" type="submit">Login</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );

};

export default LoginPage;