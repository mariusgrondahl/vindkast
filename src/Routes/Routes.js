import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Map from "../Pages/Map";
import SurfSpotDetail from "../Pages/SurfSpotDetail";

function Routes (props) {
    return(
        <div className="Routes">
            <Route path="/" exact component={Home}/>
            <Route path="/map" exact component={Map}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/spot/:id" exact component={SurfSpotDetail}/>
        </div>
    )
}

export default Routes;

