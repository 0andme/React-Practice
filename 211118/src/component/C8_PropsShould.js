import React, { Component } from "react";
import PropTypes from "prop-types";

// 필수 프로퍼티 지정하기
class C8_PropsShould extends Component {
  render() {
    const { valueName } = this.props;
    return (
      <div>
        <span>필수 데이터 : {valueName}</span>
      </div>
    );
  }
}
// 데이터 타입 지정시 .isRequired를 붙인다.
C8_PropsShould.propTypes = {
  valueName: PropTypes.string.isRequired,
};

export default C8_PropsShould;
