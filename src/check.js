import React, { Component } from 'react'
import fire from './config/Fire';
import Home from './pages/home';
import Login from './pages/login';

export default class check extends Component {
    constructor(props){
        super(props);
        this.state = {
          user: {},
        }
      }
    
      componentDidMount(){
        this.authListener();
      }
    
      authListener(){
        fire.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({ user });
          } else {
            this.setState({ user: null })
          }
        })
      }
    
    render() {
        return (
            <div>
                {this.state.user ? (<Home /> ): (<Login/>)}
            </div>
        )
    }
}
