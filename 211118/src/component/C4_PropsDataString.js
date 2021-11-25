//rccp
import React, { Component } from "react";
// 필수 코드
import PropTypes from "prop-types";

class C4_PropsDataString extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
// 자료형 선언
C4_PropsDataString.propTypes = {
  name: PropTypes.string,
};

export default C4_PropsDataString;
