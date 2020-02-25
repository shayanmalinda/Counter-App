import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: []
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    if (this.props.counter.value === 0) {
      return "badge badge-warning m-2";
    } else {
      return "badge badge-primary m-2";
    }
  }

  formatCount() {
    if (this.props.counter.value === 0) {
      return "zero";
    } else {
      return this.props.counter.value;
    }
  }
}

export default Counter;
