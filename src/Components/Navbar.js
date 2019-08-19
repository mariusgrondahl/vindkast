import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../Css/Navbar.css";
import { FaMap } from 'react-icons/fa';


class Navbar extends Component {
    
    render(){
        return (
           
            <div className="Navbar">
                <ul>
                    <li><Link to="/map" ><span><FaMap /></span>Map</Link></li>
                   
                </ul>
            </div>
        )
    }
}

export default withRouter(Navbar);
