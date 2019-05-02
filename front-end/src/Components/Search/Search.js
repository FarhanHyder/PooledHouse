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

        const tip_info = this.props.tip_info;
        const search_query = this.props.search_query;
        const raw_results = searchParse(tip_info, search_query, 
                                        this.state.day, this.state.shift, 
                                        this.state.position);
        
        if (Object.keys(raw_results).length == 0) {
            return (
                <p>No results found.</p> 
            )
        } else {
            return (null);
        }
    }
}