import React, { Component } from 'react';
import "../Css/Fullscreen.css";


class Fullscreen extends Component {
    render(){
        var styling = {
            backgroundImage: 'url(' + this.props.image + ')',
            height: this.props.height
          };

        return(
            <div className="Fullscreen" style={styling}>
                {this.props.children}
            </div>
        )
    }

}

export default Fullscreen;