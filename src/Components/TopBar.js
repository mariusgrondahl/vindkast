import React, { Component } from 'react';
import "../Css/TopBar.css";

class TopBar extends Component {
    render(){
        return(
            <div className="TopBar">
                <div className="logo">
                    <img src="../img/vindkastlogo.svg" width="90" />
                </div>
            </div>
        )
    }
}

export default TopBar;