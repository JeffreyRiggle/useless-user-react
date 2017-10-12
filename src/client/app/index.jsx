import React from 'react';
import {render} from 'react-dom';
import UserController from './usercontroller.jsx';
import UserList from './userlist.jsx';
import styles from './styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>Simple User Creation Interface</h1>
                <UserController></UserController>
                <UserList></UserList>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));