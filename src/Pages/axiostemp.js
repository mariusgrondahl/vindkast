import React, { Component } from "react";
import axios from "axios"
import BeerView from "./BeerView";
import MainLayout from "../Layout/MainLayout";


class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: []
        };

    }

    componentDidMount() {
        // Setting the APIURL
        let URL = "https://ih-beers-api.herokuapp.com/beers/random";
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

    render() {
        return (
            <MainLayout>
                <h1>Here is a random beer</h1>
                <BeerView title={this.state.response.name} 
                        description={this.state.response.description}
                        image={this.state.response.image_url}            
                />
            </MainLayout>
        )
    }
}

export default Random;