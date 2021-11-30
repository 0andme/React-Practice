import React, { Component } from "react";
import PropTypes from "prop-types";

class C9_PropsDefault extends Component {
  render() {
    const { defaultData } = this.props;
    return (
      <div>
        <span>defaultData:{defaultData}</span>
      </div>
    );
  }
  // 기본 값 선언 - 방법 1
  static defaultProps = {
    defaultData: "default",
  };
}

C9_PropsDefault.propTypes = {
  defaultData: PropTypes.string,
};

// 기본 값 선언 - 방법 2
C9_PropsDefault.defaultProps = {
  defaultData: "default",
};

export default C9_PropsDefault;
