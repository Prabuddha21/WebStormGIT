'use strict';

import React, {Component} from 'react';

import AddUser from './AddUser'
import Users from './Users';

export default class AppContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: [{
                id: Date.now(),
                name: 'John'
            }]
        }
    }

    addUser(user) {
        this.setState(function (state) {
            return {
                users: state.users.concat({id: Date.now(), name: user.name})
            };
        })
    }

    render() {

        return <div>
            <h2>User App</h2>
            <AddUser addUser={user => this.addUser(user)}/>
            <Users users={this.state.users}/>
        </div>;
    }
}