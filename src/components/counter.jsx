import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
      </div>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log(this);
  };

  getBadgeClass() {
    if (this.state.count === 0) {
      return "badge badge-warning m-2";
    } else {
      return "badge badge-primary m-2";
    }
  }

  formatCount() {
    if (this.state.count === 0) {
      return "zero";
    } else {
      return this.state.count;
    }
  }
}

export default Counter;
