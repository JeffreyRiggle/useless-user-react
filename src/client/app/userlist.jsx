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
            <ul class="user-list">
                <li class="user-list-item-header">
                    <span class="user-list-column-header">First Name</span>
                    <span class="user-list-column-header">Last Name</span>
                    <span class="user-list-column-header">Occupation</span>
                    <span class="user-list-column-header">Gender</span>
                </li>
                {this.usermanager.users.map(user => 
                    <li class="user-list-item">
                        <span class="user-list-column">{user.firstName}</span>
                        <span class="user-list-column">{user.lastName}</span>
                        <span class="user-list-column">{user.occupation}</span>
                        <span className={"user-list-column " + (user.gender === 'f' ? 'user-female' : 'user-male')}>{user.gender}</span>
                    </li>)}
            </ul>
        );
    }
}

export default UserList;