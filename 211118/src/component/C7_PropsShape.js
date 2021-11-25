import React, { Component } from "react";
import PropTypes from "prop-types";

class C7_PropsShape extends Component {
  render() {
    const { objValue } = this.props;
    return (
      <div>
        <span>Object : {String(Object.entries(objValue))}</span>
      </div>
    );
  }
}

C7_PropsShape.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default C7_PropsShape;
