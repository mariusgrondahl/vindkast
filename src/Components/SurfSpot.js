import React, {Component} from "react";
import "../Css/MapMarker.css"
import "../Css/Modal.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SurfSpot extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            weather: []
        }
    }


    
    render() {
        
    return(          
            <div className="MapMarker">
                <h1>{this.props.name}</h1>
                <Link to={`/spot/${this.props.id}`} >Se mer</Link>
            </div>
        )
    }
}

export default SurfSpot;