import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import MapMarker from "../Components/MapMarker";
import SurfSpot from "../Components/SurfSpot";
// import CreateMarker from "../Components/CreateMarker";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Modal from "../Components/Modal";
import Login from "../Pages/Login";


class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            surfspots: [],
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
            this.setState({surfspots: response.data})            
        })
        .catch((error)=> {
            return error
        });
    }

    getLatLng(event)  {
        console.log(event.lngLat)
    }

    
    render() {
        let surfspot = this.state.surfspots.map(surfspot => (
                    <Marker latitude={parseInt(surfspot.lat)} longitude={parseInt(surfspot.lng)}>
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
                    onClick={this.getLatLng}
                    mapboxApiAccessToken="pk.eyJ1IjoibWFyaXVzZ3JvbmRhaGwiLCJhIjoiY2p6OHZpb2JpMDMwNTNkbzJlbnJyb2lkdiJ9.zTQFrIU4__uaAPGzAUQSFw" 
                    {...this.state.viewport} 
                    onViewportChange={(viewport) => this.setState({viewport})}
                >                
                {surfspot}


                </ReactMapGL>
            </div>


    );
  }
}

export default Map;

