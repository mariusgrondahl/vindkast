import React, { Component } from 'react';
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";
import axios from "axios";
import qs from "querystring";

class CreateSpot extends Component {


    state = {
        spot: {
            spot_name: "", 
            desc: "", 
            lat: "",
            lng: " ",
            img: "",
            north: false,
            north_east: false,
            east: false,
            south_east: false,
            south: false,
            south_west: false,
            west: false,
            north_west: false
        }
    }

    CreateSpot(spot_name, desc, lat, lng, img, north, north_east, east, south_east, south, south_west, west, north_west) {
        debugger
        return axios({
            method: "POST",
            url: "marker/create",
            baseURL: process.env.REACT_APP_API,
            data: {spot_name, desc, lat, lng, img, north, north_east, east, south_east, south, south_west, west, north_west}

        })
        .then((response)=> {
           console.log("hei")
        })
    }

    handleFormSubmit = (e)=> {
        e.preventDefault();
        this.CreateSpot(this.state.spot.spot_name, 
                        this.state.spot.desc,
                        this.state.spot.lat,
                        this.state.spot.lng,
                        this.state.spot.img,
                        this.state.spot.north,
                        this.state.spot.north_east,
                        this.state.spot.east,
                        this.state.spot.south_east,
                        this.state.spot.south,
                        this.state.spot.south_west,
                        this.state.spot.west,
                        this.state.spot.north_west
                        )
        .then(()=> {
            this.setState({error: "There was an error"});
            this.props.history.push("/");
        })
        .catch(({response})=> {
            this.setState({error: response.data.message});
        })
      }

      handleInputChange = (e)=> {
        let spot = {...this.state.spot}
        spot[e.target.name] = e.target.value 
        this.setState({ 
            spot: spot
        })
      }

      handleCheckBoxChange = (e)=> {
        let spot = {...this.state.spot}
        spot[e.target.name] = e.target.value === "" ? true: false  
        this.setState({ 
            spot: spot
        })
      }


    render(){
        return(
            <MainLayout>
                <h1>Add a new spot</h1>
                <form className="FormContainer" onSubmit={this.handleFormSubmit}>
                    <div className="flexItem">
                        <label>Spotname</label>
                        <input 
                            type="text" 
                            name="spot_name" 
                            placeholder="Name of surfspot" 
                            value={this.state.spot_name} 
                            onChange={this.handleInputChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Description</label>
                        <textarea 
                            type="text-field" 
                            name="desc" 
                            placeholder="Describe the spot" 
                            value={this.state.desc} 
                            onChange={this.handleInputChange}
                            >
                        </textarea>
                    </div>

                    <div className="flexItem">
                        <label>Latitude</label>
                        <input 
                            type="text" 
                            name="lat" 
                            placeholder="Latitude" 
                            value={this.state.lat} 
                            onChange={this.handleInputChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>Longitude</label>
                        <input 
                            type="text" 
                            name="lng" 
                            placeholder="Longitude" 
                            value={this.state.lng} 
                            onChange={this.handleInputChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <label>ImageURL (Paste an imageadress)</label>
                        <input 
                            type="text" 
                            name="img" 
                            placeholder="imageurl" 
                            value={this.state.img} 
                            onChange={this.handleInputChange}>
                        </input>
                    </div>

                    <div className="flexItem">
                        <h3>Winddirections:</h3>

                        <input  type="checkbox" name="north" 
                            value={this.state.north} 
                            onChange={this.handleCheckBoxChange}
                        >
                        </input>
                        <label>North</label>

                        <input type="checkbox"  name="north_east" 
                            value={this.state.north_east} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>Northeast</label>

                        <input type="checkbox"  name="east" 
                            value={this.state.east} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>East</label>

                        <input type="checkbox"  name="south_east" 
                            value={this.state.south_east} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>Southeast</label>

                        <input type="checkbox"  name="south" 
                            value={this.state.south} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>South</label>

                        <input type="checkbox"  name="south_west" 
                            value={this.state.south_west} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>Southwest</label>

                        <input type="checkbox"  name="west" 
                            value={this.state.west} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>West</label>


                        <input type="checkbox"  name="north_west" 
                            value={this.state.north_west} 
                            onChange={this.handleCheckBoxChange}>
                        </input>
                        <label>Northwest</label>

                    </div>

                    <div className="flexItem">
                        <button type="submit" value="Submit">Submit</button>
      
                    </div>

                </form>
            </MainLayout>
        )
    }
}

export default CreateSpot;
