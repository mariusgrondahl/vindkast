import React, {Component} from "react";
import "../Css/MapMarker.css"
import axios from "axios";


class MapMarker extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            weather: [],
        }; 
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {  
        let WeatherURL   = process.env.REACT_APP_DARK_SKY + "/" + this.props.lat + "," + this.props.lng;  

        axios.get(WeatherURL)
        .then( (response)=>{
            debugger
            this.setState({weather: response.data})   
        })
        
        .catch((error)=> {
            return error
        });
    }
    render() {
        let weather = this.state.weather.map(weather => (
            <div className="weather">
                <h1>{weather.currently.windSpeed}</h1>
                <h1>{weather.currently.summary}</h1>
            </div>
        ))
    return(
                <div className="MapMarker">
                    <h1>{this.props.name}</h1>
                    {weather}
                </div>


    )
    }
}

export default MapMarker;