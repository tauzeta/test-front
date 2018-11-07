import React, { Component } from 'react';

import './App.css';


class FetchUserlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://localhost:3001/api/user/')
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                this.setState({'users': data})});

    }

    render () {
        return (
            <div>
                <h1>Userlist</h1>
                {this.state.users.map(function(item,index) {
                    return (
                        <div key={index}>
                            <p>ID: {item.id}, username: {item.username}</p>
                        </div>
                    )
                })}



            </div>
        );
    }
}

export default FetchUserlist;