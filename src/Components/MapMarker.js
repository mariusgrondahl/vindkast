import React, {Component} from "react";


function MapMarker (props) {
    return(
        <div className="MapMarker">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default MapMarker;