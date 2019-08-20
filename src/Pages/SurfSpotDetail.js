import React, { Component } from 'react';
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";
import axios from "axios";

class SurfSpotDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            response: [],
        };
      }

    componentDidMount(){
        // Catching the params from the URL
        let params = this.props.match.params.id
        let URL  = `${process.env.REACT_APP_API}/marker/` + params; 
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
            <div>
                <Fullscreen  
                    image={this.state.response.img} 
                    title={this.state.response.spot_name}
                />
                <MainLayout>
                    <h4>Winddirections</h4>
                </MainLayout>  
            </div>
        )
    }
}



export default SurfSpotDetail;