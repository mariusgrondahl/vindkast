import React, { Component } from 'react';
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";
import axios from "axios";

class SurfSpotDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            response: [],
            winddirections: []
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

    getWindDirections () {
        let direction = this.state.response;
        if (direction.north === true ) { this.state.winddirections.push("North")};
        if (direction.north_east === true ) { this.state.winddirections.push("North East")};
        if (direction.east === true ) { this.state.winddirections.push("East")};
        if (direction.south_east === true ) { this.state.winddirections.push("South East")};
        if (direction.south === true ) { this.state.winddirections.push("South")};
        if (direction.south_west === true ) { this.state.winddirections.push("South West")};
        if (direction.west === true ) { this.state.winddirections.push("West")};
        if (direction.north_west === true ) { this.state.winddirections.push("North West")};

        return this.state.winddirections.toString();
        
    }
    
    render(){
        let windyURL = "https://www.windy.com/?" + this.state.response.lat + "," + this.state.response.lng;
        let windyEmbed = "https://embed.windy.com/embed2.html?lat=" + this.state.response.lat + "&lon=" + this.state.response.lng + "&zoom=9&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=52.346&detailLon=4.874&metricWind=default&metricTemp=default&radarRange=-1";
        let windyEmbedMap = <iframe width="100%" height="450" src={windyEmbed} frameborder="0"></iframe>

        return(
            <div>
                <MainLayout>
                    <h1>{this.state.response.spot_name}</h1>
                    <p>{this.state.response.desc}</p>
                    <h4>Winddirections:</h4>
                    {this.getWindDirections()}
                    <h2>Forecast:</h2>
                    {windyEmbedMap}
                </MainLayout>  
            </div>
        )
    }
}



export default SurfSpotDetail;


