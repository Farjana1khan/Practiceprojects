import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div style={{ margin: "50px 0 50px 50px" }}>
        <h3>Child Component</h3>
        <hr />
        Input Value: {this.props.elementValue}
      </div>
    );
  }
}

export default Child;
