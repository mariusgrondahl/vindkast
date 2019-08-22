import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Map from "../Pages/Map";
import CreateSpot from "../Pages/CreateSpot"
import SurfSpotDetail from "../Pages/SurfSpotDetail";
import User from "../Pages/UserDetail";
import PrivateRoute from "../Routes/PrivateRoute";

function Routes (props) {
    return(
        <div className="Routes">
            <Route path="/" exact component={Home}/>
            <Route path="/map" exact component={Map}/>
            <Route path="/spot/:id" exact component={SurfSpotDetail}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/logout" exact component={Logout}/>

            <PrivateRoute redirectUrl='/login' path="/user/:id" exact component={User}/>
            <PrivateRoute redirectUrl='/login' path="/create" component={CreateSpot} />

        </div>
    )
}

export default Routes;

