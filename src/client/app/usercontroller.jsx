import React from 'react';
import {usermanager} from './usermanager';

class UserController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfUsers: ''
        };

        this.usermanager = usermanager;
    }

    createClicked(e) {
        this.usermanager.createUsers(Number.parseInt(this.state.numberOfUsers));
    }

    updateClicked(e) {
        this.usermanager.updateUsers(Number.parseInt(this.state.numberOfUsers));
    }

    clearClicked(e) {
        this.usermanager.clearUsers();
    }

    numberChanged(e) {
        this.setState({ numberOfUsers: e.target.value });
    }

    render() {
        return (
            <div>
                <span>Number of users to create of update</span>
                <input type="text" value={this.state.numberOfUsers} onChange={this.numberChanged.bind(this)}/>
                <button onClick={this.createClicked.bind(this)}>Create</button>
                <button onClick={this.updateClicked.bind(this)}>Update</button>
                <button onClick={this.clearClicked.bind(this)}>Clear</button>
            </div>
        );
    }
}

export default UserController;