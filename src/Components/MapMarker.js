import React, {Component} from "react";
import "../Css/MapMarker.css"
//import axios from "../utils/Axios";
import axios from "axios";

class MapMarker extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            weather: []
        }; 

        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount() {  

        let WeatherURL = process.env.REACT_APP_WEATHER_BIT + "&lat=" + this.props.lat + "&lon=" + this.props.lng;  
        axios.get(WeatherURL)
        .then( (response)=>{
            this.setState({weather: response.data.data});   
        })
        .catch((error)=> {
            return error
        });
    }
    render() {
        
        let weatherForecast = this.state.weather.map(forecast => (
            <div className="Forecast">
                <p><span>Winddirection: </span>{forecast.wind_cdir}</p>
                <p><span>Windspeed: </span>{forecast.wind_spd}</p>
                <p><span>Winddirection: </span>{forecast.weather.icon}</p>
                <p><span>Winddirection: </span>{forecast.wind_cdir}</p>
            </div>   
        ))
    return(
            <div className="MapMarker">
                <h1>{this.props.name}</h1>
                {weatherForecast}
            </div>
        )
    }
}

export default MapMarker;