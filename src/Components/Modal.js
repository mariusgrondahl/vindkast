import React, { Component } from 'react';
import "../Css/Modal.css";

class Modal extends Component {
    render() {


    return (

            <div className="modal">
                <h1>{this.props.title}</h1>
                <p>Do you want to create a spot for lat: {this.props.lat}, lng: {this.props.lng}</p>
            </div>
    )
}
}

export default Modal;