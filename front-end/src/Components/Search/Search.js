import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Table, Button} from 'react-bootstrap';

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
            return (
                <Table>
                    <thead>
                        <tr>
                            <th>Business</th>
                            <th>Neighborhood</th>
                            <th>Hourly Avg $</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.keys(raw_results).map(key => {
                            return (
                                <tr>
                                    <td>{ raw_results[key].business }</td>
                                    <td>{ raw_results[key].neighborhood }</td>
                                    <td>{ Math.floor(raw_results[key].tipsPerHour) }</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </Table>

            );
        }
    }
}

export default Search;