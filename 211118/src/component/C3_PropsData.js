import React from "react";

class C3_PropsData extends React.Component {
  render() {
    const name = this.props.name;

    return <span>{name}</span>;
  }
}

export default C3_PropsData;
