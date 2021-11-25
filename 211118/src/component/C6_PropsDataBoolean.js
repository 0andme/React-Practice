import React, { Component } from "react";

class C6_PropsDataBoolean extends Component {
  render() {
    const message = this.props.isTrue ? "참" : "거짓";
    return <div>{message}</div>;
  }
}

export default C6_PropsDataBoolean;
