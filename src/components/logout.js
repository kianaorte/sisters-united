import React, { Component } from 'react';
import fire from '../config/Fire';

class logout extends Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this);
    }
    logout(){
        fire.auth().signOut();
    }
}

export default logout;