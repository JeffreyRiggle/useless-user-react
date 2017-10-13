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
        var newValue = e.target.value;
        this.setState(
            { 
                numberOfUsers: newValue,
                valid: !isNaN(Number.parseInt(newValue))
            });
    }

    render() {
        return (
            <div class="controller">
                <span class="desc-text">Number of users to create of update</span>
                <input 
                    type="text" 
                    value={this.state.numberOfUsers} 
                    onChange={this.numberChanged.bind(this)}
                    className={this.state.valid ? 'valid' : 'invalid'}/>
                <button onClick={this.createClicked.bind(this)} disabled={!this.state.valid}>Create</button>
                <button onClick={this.updateClicked.bind(this)} disabled={!this.state.valid}>Update</button>
                <button onClick={this.clearClicked.bind(this)}>Clear</button>
            </div>
        );
    }
}

export default UserController;