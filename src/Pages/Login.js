import React, { Component } from 'react';
import Auth from "../utils/Auth";
import MainLayout from "../Layout/MainLayout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const auth = new Auth();

class Signup extends Component {
    constructor(props){
        super(props);
    
    this.state = {
        user: {
            username: "", 
            password: "", 
            firstname: "",
            lastname: "",
            email: ""
        },
        error: null
    }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (e)=> {
        e.preventDefault();
        auth.login(this.state.user.username, this.state.user.password)
            .then(()=> {
                this.setState({error: "There was an error"});
                this.props.history.push("/");
            })
            .catch((response)=> {
                this.setState({error: response.data.message});
            })
      }

      handleFormChange = (e)=> {
        let user = {...this.state.user}
        user[e.target.name] = e.target.value 
        this.setState({ 
            user: user
        })
      }
    render(){
        return(
            
            <MainLayout>
              <div className="MarginTop"></div>
            <h1>Login</h1>
                <form className="FormContainer" onSubmit={this.handleFormSubmit}>
                    <div className="flexItem">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="username" 
                            value={this.state.username} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                         <button type="submit" value="Submit">Login</button>
                    </div>

                </form>
                <p className="center"><span>Not a user yet? </span><span><Link to="/signup" ><strong>Sign up here</strong></Link></span></p>
            </MainLayout>
        )
    }
}

export default Signup;