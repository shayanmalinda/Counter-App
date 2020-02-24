import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClass() {
    if (this.state.value === 0) {
      return "badge badge-warning m-2";
    } else {
      return "badge badge-primary m-2";
    }
  }

  formatCount() {
    if (this.state.value === 0) {
      return "zero";
    } else {
      return this.state.value;
    }
  }
}

export default Counter;
