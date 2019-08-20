import React, { Component } from 'react';
import "../Css/Modal.css";

class Modal extends Component {
    render() {


    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>{this.props.title}</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {this.props.children}
                    </p>
                </div>
            </div>
        </div>
    )
}
}

export default Modal;