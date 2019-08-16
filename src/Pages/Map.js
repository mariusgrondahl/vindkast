import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import MapMarker from "../Components/MapMarker"
import CreateMarker from "../Components/CreateMarker";
import Navbar from "../Components/Navbar";


class Map extends Component {
        state = {
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
        }


    onClick(event, props)  {
        console.log(event)
        console.log(event.lngLat)
        
      }
    
  render() {


    const TOKEN = "pk.eyJ1IjoibWFyaXVzZ3JvbmRhaGwiLCJhIjoiY2p6OHZpb2JpMDMwNTNkbzJlbnJyb2lkdiJ9.zTQFrIU4__uaAPGzAUQSFw";
    return (
        <div>
        <Navbar/>
            <ReactMapGL 
                onDblClick={this.onClick} 
                mapboxApiAccessToken={TOKEN} 
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            >
            <CreateMarker />
                <Marker latitude={59.284073} onClick={this.handleClick} longitude={11.109403} offsetLeft={-20} offsetTop={-10}>
                <MapMarker title="Tittel på sted" desc="Lengre inngress om bla bla bla"/>
                </Marker>

            </ReactMapGL>
            </div>


    );
  }
}

export default Map;