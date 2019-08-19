import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import MapMarker from "../Components/MapMarker";
// import CreateMarker from "../Components/CreateMarker";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import axios from "axios";


class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            markers: [],
            weather: [],
            latitude: 50,
            longitude: 5,
            showPopup:{
                showPopup: true
            },
            viewport: {
                width: "100vw",
                height: "100vh",
                latitude: 50,
                longitude: 5,
                zoom: 4
            }
        }; 
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        // Setting the APIURL
        let MarkerURL  = `${process.env.REACT_APP_API}/marker/all-markers`;        
        axios.get(MarkerURL)
        .then( (response)=>{
            this.setState({markers: response.data})            
        })
        .catch((error)=> {
            return error
        });
    }

    getLatLng(event)  {
        console.log(event.lngLat)
    }
    
    render() {
        let markers = this.state.markers.map(marker => (
            <Marker latitude={parseInt(marker.lat)} longitude={parseInt(marker.lng)}>
                    <MapMarker 
                        lat={parseInt(marker.lat)} 
                        lng={parseInt(marker.lng)} 
                        name={marker.spot_name}
                    />
            </Marker>
        ))
        return (
            <div>     
                <Navbar/>
                <TopBar />
                <ReactMapGL 
                    onClick={this.getLatLng}
                    mapboxApiAccessToken="pk.eyJ1IjoibWFyaXVzZ3JvbmRhaGwiLCJhIjoiY2p6OHZpb2JpMDMwNTNkbzJlbnJyb2lkdiJ9.zTQFrIU4__uaAPGzAUQSFw" 
                    {...this.state.viewport} 
                    onViewportChange={(viewport) => this.setState({viewport})}
                >                
                    {this.state.markers && markers}
                </ReactMapGL>
            </div>


    );
  }
}

export default Map;


