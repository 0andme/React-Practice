import React, { Component } from "react";
import PropTypes from "prop-types";

class C5_PropsDataTypes extends Component {
  render() {
    // props를 객체구조분해해서 데이터추출
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } =
      this.props;
    return (
      <div>
        <div> boolValue : {boolValue.toString()}</div>
        <div> numValue {numValue}</div>
        <div> arrayValue :{arrayValue}</div>
        <div>
          objValue :{objValue.name}
          {objValue.age}
        </div>
        <div>nodeValue : {nodeValue}</div>
        <div> funcValue :{funcValue}</div>
      </div>
    );
  }
}
// 데이터 타입 지정
C5_PropsDataTypes.propTypes = {
  // 불린
  boolValue: PropTypes.bool,
  // 숫자
  numValue: PropTypes.number,
  // 숫자 배열
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  // 객체
  objValue: PropTypes.object,
  // html
  nodeValue: PropTypes.node,
  // 함수
  funcValue: PropTypes.func,
};

export default C5_PropsDataTypes;
