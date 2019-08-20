import React, { Component } from 'react';
import MainLayout from "./Layout/MainLayout";
import Auth from "../utils/Auth";
 
class CreateMarker extends Component {
  constructor(props){
    super(props);

  this.state = {
      user: {
          lat: "", 
          lng: "", 
          spotname: "",
          n: "",
          ne: "",
          e: "",
          se: "",
          s: "",
          sw: "",
          w: "",
          nw: ""
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
  render() {
    return (
      <MainLayout>
            <MainLayout>
            <h1>Signup!</h1>
                <form className="FormContainer" onSubmit={this.handleFormSubmit}>
                    <div className="flexItem">
                        <label>Lat:</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="username" 
                            value={this.state.lat} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Lng:</label>
                        <input 
                            type="check" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.lng} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>
                    </form>
                </div>
        </MainLayout>
    );
  }
}
 
export default CreateMarker;