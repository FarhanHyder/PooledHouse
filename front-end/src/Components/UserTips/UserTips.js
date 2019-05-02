import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {Table, Button, Card, Form} from 'react-bootstrap';


class UserTips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myTips: true,
            addNewTips: false,
        };

        this.handleMyTips = this.handleMyTips.bind(this);
        this.handleAddNewTips = this.handleAddNewTips.bind(this);
    }

}

export default UserTips;