import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NameForm from './NameForm';

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";

import aws_config from "./aws-exports";

Amplify.configure(aws_config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_pers: '',
    };
  }

  render() {

    const ListView = ({ persons }) => (
      <div>
          <h3>All People</h3>
          <ul>
            {persons.map(person => <li>{person.name}</li>)}
          </ul>
      </div>
    )

    return (
      <div>
      <NameForm />
      <Connect query={graphqlOperation(queries.listPersons)}
               subscription={graphqlOperation(subscriptions.onCreatePerson)}>
                {({ data: { listPersons }, loading, error }) => {
                    if (error) return (<h3>Error</h3>);
                    if (loading || !listPersons) return (<h3>Loading...</h3>);
                    return (<ListView persons={listPersons.items} /> );
                }}
      </Connect>
      </div>
    );
  };
}

export default App;