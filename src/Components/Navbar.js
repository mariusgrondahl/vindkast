import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../Css/Navbar.css";
import { FaMap, FaHome, FaPen } from 'react-icons/fa';


class Navbar extends Component {
    
    render(){
        return (
           
            <div className="Navbar">
                <ul>
                    <li><Link to="/" ><span><FaHome /></span>Home</Link></li>    
                    <li><Link to="/map" ><span><FaMap /></span>Map</Link></li>    
                    <li><Link to="/create" ><span><FaPen /></span>Add a spot?</Link></li>   
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar);
