import React, { Component } from "react";
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import Pulse from 'react-reveal/Pulse';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
            <TopBar />
            <Fullscreen  image="../img/surfspot.jpg" height="95vh">
                <Pulse>
                <h1>Welcome to windspots</h1>
                </Pulse>
                
                <p>We`ve all been there. You`re travelling to a new place and you have been googling surfspots for hours.
                    Finally, there is a solution. We aim to gather Kitesurf-spots from all over the globe on our map and provide
                    the best windirection for each spot. 
                </p>
                <Link to="/map"> <button>Find surfspots</button> </Link>
            </Fullscreen>
            <NavBar />
            </div>
        )
    }
}

export default Home;