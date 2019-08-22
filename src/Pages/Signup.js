import React, { Component } from 'react';
import Auth from "../utils/Auth";
import MainLayout from "../Layout/MainLayout";
const auth = new Auth();

class Signup extends Component {
    state = {
        user: {
            username: "", 
            password: "", 
            firstname: "", 
            lastname: "", 
            email: ""
        }

    }
    handleFormSubmit = (e)=> {
        e.preventDefault();
        auth.signup(this.state.user)
            .then(()=> {
                this.setState({error: ""});
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
            <h1>Signup!</h1>
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
                        <label>Firstname:</label>
                        <input 
                            type="text" 
                            name="firstname" 
                            placeholder="firstname" 
                            value={this.state.firstname} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Lastname:</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            placeholder="lastname" 
                            value={this.state.lastname} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email" 
                            value={this.state.email} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>


                    <div className="flexItem">
                        <button type="submit" value="Submit">Sign up</button>
                    </div>

                </form>
            </MainLayout>



            
        )
    }
}

export default Signup;