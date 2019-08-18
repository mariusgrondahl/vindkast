import React, { Component } from "react";
import axios from "axios"
import MainLayout from "../Layout/MainLayout";


class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        };
    }


    componentDidMount() {
        // Setting the APIURL
        let URL = `${process.env.REACT_APP_API}/marker/all-markers`;
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
        console.log(this.state.response)
        return (
            <MainLayout>
                <h1>Here is a marker</h1>
                 <h1>{this.state.response.lat} </h1>

             
            </MainLayout>
        )
    }
}

export default Temp;