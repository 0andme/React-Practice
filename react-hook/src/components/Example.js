import React, { Component } from "react";

class Example extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>click cnt : {count}</p>
        <button onClick={this.click}>UP</button>
      </div>
    );
  }
  click = () => {
    this.setState((state) => {
      return { ...state, count: state.count + 1 };
    });
  };
}

export default Example;
