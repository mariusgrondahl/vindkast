import React, { Component } from 'react';
import "../Css/Fullscreen.css";

class Fullscreen extends Component {
    render(){
        var styling = {
            backgroundImage: 'url(' + this.props.image + ')',
          };

        return(
            <div className="Fullscreen" style={styling}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }

}

export default Fullscreen;