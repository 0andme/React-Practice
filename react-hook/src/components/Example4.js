import React, { Component } from "react";

class Example4 extends Component {
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
  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }
  click = () => {
    this.setState((state) => {
      return { ...state, count: state.count + 1 };
    });
  };
}

export default Example4;
