import React, { Component } from "react";
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";
import TopBar from "../Components/TopBar";
import NavBar from "../Components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
            <TopBar />
            <Fullscreen  image="../img/surfspot.jpg" height="95vh">
                <h1>Welcome to Windspots</h1>
                <p>We`ve all been there. You`re travelling to a new place and you have been googling surfspots for a hours.
                    Finally, there i a solution. We aim to gather Kitesurf-spots from all over the globe on our map and provide
                    the best windirection. 
                </p>
                <Link to="/map"> <button>Find surfspots</button> </Link>
            </Fullscreen>
            <NavBar />
            </div>
        )
    }
}

export default Home;