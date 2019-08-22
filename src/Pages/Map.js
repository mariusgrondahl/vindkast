import React, {Component} from 'react';
import ReactMapGL, {Marker, GeolocateControl, Popup} from 'react-map-gl';
import SurfSpot from "../Components/SurfSpot";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import axios from "axios";

import Modal from "../Components/Modal";

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFyaXVzZ3JvbmRhaGwiLCJhIjoiY2p6OHZpb2JpMDMwNTNkbzJlbnJyb2lkdiJ9.zTQFrIU4__uaAPGzAUQSFw';

const geolocateStyle = {
    position: 'absolute',
    bottom: 50,
    left: 0,
    margin: 10
  };

class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            surfspots: [],
            latitude: 56,
            longitude: 9,
            showPopup:{
                showPopup: true
            },
            viewport: {
                width: "100vw",
                height: "100vh",
                latitude: 56,
                longitude: 9,
                zoom: 4,
                bearing: 0,
                pitch: 0
            }
        }; 
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        // Setting the APIURL
        let MarkerURL  = `${process.env.REACT_APP_API}/marker/all-markers`;        
        axios.get(MarkerURL)
        .then( (response)=>{
            this.setState({surfspots: response.data})            
        })
        .catch((error)=> {
            return error
        });
    }

    getLatLng(event)  {
        let newSpot = event.lngLat;
        return <Modal title="Create spot?" lat={event.lngLat} />
    }

    _onViewportChange = viewport => this.setState({viewport});

    
    render() {
        let surfspot = this.state.surfspots.map(surfspot => (
                    <Marker 
                        latitude={parseInt(surfspot.lat)} 
                        longitude={parseInt(surfspot.lng)}
                    >
                            <SurfSpot 
                                name={surfspot.spot_name}
                                img={surfspot.img}
                                id={surfspot._id}
                            />
                    </Marker>
        ))
        return (
            <div>     
                <Navbar/>
                <TopBar />

                <ReactMapGL 
 
                    mapboxApiAccessToken={MAPBOX_TOKEN} 
                    {...this.state.viewport} 
                    onClick={this.getLatLng}
                    onViewportChange={(viewport) => this.setState({viewport})
                }
                >  
                <div className="locateUser">      
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{enableHighAccuracy: false}}
                    trackUserLocation={true}
                    
                /> 

                </div>   
                
            

                {surfspot}

                </ReactMapGL>
            </div>


    );
  }
}

export default Map;

