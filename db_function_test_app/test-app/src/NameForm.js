import React, { Component } from 'react';

import * as mutations from './graphql/mutations';
import Amplify, { API, graphqlOperation } from "aws-amplify";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({name: event.target.value});
        let t_e = {
            name: this.state.name
        }
        try {
            await API.graphql(graphqlOperation(mutations.createPerson, {input: t_e}));
            console.log(t_e);
            alert("Success!");
            this.setState({name: ''});
        } catch(err) {
            alert("Error");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;