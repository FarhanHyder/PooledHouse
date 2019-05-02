import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';

import { searchParse } from './searchFunctions'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 'All',
            shift: 'All',
            position: 'All',
        };
    }

    render() {

        return (null);
    }
}