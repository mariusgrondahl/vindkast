import React, { Component } from "react";

class Modal extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          open
        </button>
        </div>
    );
  }
}

export default Modal;