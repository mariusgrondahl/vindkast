import React, { Component } from "react";
import axios from "axios";
import MainLayout from "../Layout/MainLayout";
import qs from "querystring"; // used for parsing a javascript object in the right format (x-www-form-urlencoded)


class AddMarker extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          contributed_by: "",
          attenuation_level: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormChange = (e)=> {
        this.setState({ 
            [e.target.name]: e.target.value // within the square brackets "[]" you can use dynamic keys
        })
      }
    
    handleFormSubmit = (e)=> {
        e.preventDefault(); // Disable defaut POST action
        axios({
            method: "POST",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data:  qs.stringify(this.state), // don't send data in json format
            url: `${process.env.REACT_APP_API}/beers/new`
        })
        .then((response)=> {
            this.props.history.push('/');
        })
        .catch((error)=> {
            console.log(error)
        })

    }

    render() {
        return (
            <MainLayout>
                <h1>Create your own Beer!</h1>
                <form className="FormContainer" onSubmit={this.handleFormSubmit}>
                    <div className="flexItem">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            value={this.state.name} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Tagline:</label>
                        <input 
                            type="text" 
                            name="tagline" 
                            placeholder="Tagline" 
                            value={this.state.tagline} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Describe the beer:</label>
                        <textarea 
                            type="text" 
                            placeholder="description"  
                            name="description" 
                            value={this.state.description} 
                            onChange={this.handleFormChange}>
                        </textarea>
                    </div>

                    <div className="flexItem">
                        <label>First brewed:</label>
                        <input 
                            type="number" 
                            name="first_brewed" 
                            placeholder="First brewed" 
                            value={this.state.first_brewed} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Brewers tips:</label>
                        <textarea 
                            type="text" 
                            placeholder="Brewers tips"  
                            name="brewers_tips" 
                            value={this.state.brewers_tips} 
                            onChange={this.handleFormChange}>
                        </textarea>
                    </div>

                    <div className="flexItem">
                        <label>Attenuationlevel:</label>
                        <input 
                            type="number" 
                            name="attenuation_level" 
                            placeholder="0" 
                            value={this.state.attenuation_level} 
                            onChange={this.handleFormChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Added by:</label>
                        <input 
                            type="text" 
                            name="contributed_by" 
                            placeholder="Added by " 
                            value={this.state.contributed_by} 
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

export default AddMarker