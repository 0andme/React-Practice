import React, { Component } from "react";
import PropTypes from "prop-types";
class C10_PropsNode extends Component {
  render() {
    const { nodeData } = this.props;
    return <div>{nodeData}</div>;
  }
}
// html node 데이터 가져오기
C10_PropsNode.propTypes = {
  nodeData: PropTypes.node,
};

export default C10_PropsNode;
