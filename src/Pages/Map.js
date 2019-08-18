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
            response: [],
            latitude: 37.7577,
            longitude: -122.4376,

            showPopup:{
                showPopup: true
            },

            viewport: {
                width: 100 + "%",
                height: 100 + "vh",
                latitude: 50.7577,
                longitude: 5.4376,
                 zoom: 6
            }
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

    getLatLng(event)  {
        console.log(event.lngLat)
    }
    
    render() {
        console.log(this.state.response)
        const TOKEN = "pk.eyJ1IjoibWFyaXVzZ3JvbmRhaGwiLCJhIjoiY2p6OHZpb2JpMDMwNTNkbzJlbnJyb2lkdiJ9.zTQFrIU4__uaAPGzAUQSFw";


    return (
        <div>     
            <Navbar/>
            <TopBar />
            <ReactMapGL 
                onDblClick={this.getLatLng} 
                mapboxApiAccessToken={TOKEN} 
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}>
            
            {/* <Marker longitude="5.5" latitude="5.55"  offsetLeft={-20} offsetTop={-10}>
                <MapMarker title="MARIUS" desc="Blab"/>
            </Marker> */}

            </ReactMapGL>
        </div>


    );
  }
}

export default Map;