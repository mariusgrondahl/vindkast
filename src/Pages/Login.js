import React, { Component } from 'react';
import Auth from "../utils/Auth";
import MainLayout from "../Layout/MainLayout";
const auth = new Auth();


class Signup extends Component {
    constructor(props){
        super(props);
    
    this.state = {
        user: {
            username: "", 
            password: "", 
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
            .catch(({response})=> {
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
                            type="text" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </MainLayout>
        )
    }
}

export default Signup;