import React, { Component } from 'react';
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "../utils/Axios";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            response: [],
        };
      }

    componentDidMount(){
        // Catching the params from the URL
        let params = this.props.match.params.id
        let URL  = `${process.env.REACT_APP_API}/user/` + params; 
        //Great hack for making "this" work
        var self = this;
        axios.get(URL)
            .then(function (response){
                self.setState({response: response.data})
            })
            .catch(function (error) {
                return error;
            });
    }

    
    render(){
        return(
                <MainLayout>
                    <div className="MarginTop"></div>
                    <h1>Hi {this.state.response.username}</h1>
                    <p> This is your profilepage {this.state.response.firstname}. 
                    Here you can keep track of your added spots and edit your userinformation.</p>
                    <Link to="/logout" > <button>Logout</button> </Link>
                </MainLayout>  

        )
    }
}



export default User;


