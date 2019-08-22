import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import MapMarker from "../Components/MapMarker";
import SurfSpot from "../Components/SurfSpot";
// import CreateMarker from "../Components/CreateMarker";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import axios from "../utils/Axios";
import Modal from "../Components/Modal";


class Map extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            markers: [],
            isShowing: false,
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

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    
    render() {
        // let markers = this.state.markers.map(marker => (
        //     <Marker latitude={parseInt(marker.lat)} longitude={parseInt(marker.lng)}>
        //             <MapMarker 
        //                 lat={parseInt(marker.lat)} 
        //                 lng={parseInt(marker.lng)} 
        //                 name={marker.spot_name}
        //             />
        //     </Marker>

        let surfspot = this.state.markers.map(surfspot => (
                    <Marker latitude={parseInt(surfspot.lat)} longitude={parseInt(surfspot.lng)}>
                            <SurfSpot name={surfspot.spot_name}/>
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
                {this.state.surfspot && surfspot}
               

                { this.state.isShowing ? 
                <div onClick={this.closeModalHandler} className="back-drop"></div> 
                : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    title="Create a marker"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>

                </ReactMapGL>
            </div>


    );
  }
}

export default Map;

