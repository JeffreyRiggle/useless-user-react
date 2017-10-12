import React from 'react';
import {usermanager} from './usermanager';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.usermanager = usermanager;
        this.usermanager.on('userschanged', () => {
            this.forceUpdate();
        });
    }

    render() {
        return (
            <ul>
                <li>
                    <span>First Name</span>
                    <span>Last Name</span>
                    <span>Occupation</span>
                    <span>Gender</span>
                </li>
                {this.usermanager.users.map(user => 
                    <li>
                        <span>{user.firstName}</span>
                        <span>{user.lastName}</span>
                        <span>{user.occupation}</span>
                        <span>{user.gender}</span>
                    </li>)}
            </ul>
        );
    }
}

export default UserList;