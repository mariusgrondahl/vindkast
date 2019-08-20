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
                <h1>{forecast.city_name}</h1>
                <div className="Temp"><strong>{forecast.temp}°</strong></div>
                <div className="Wind">{forecast.wind_cdir}</div>
                <div className="Wind">{forecast.wind_spd} ms</div>
            </div>   
        ))
    return(
            <div className="MapMarker">
                {weatherForecast}
            </div>
        )
    }
}

export default MapMarker;