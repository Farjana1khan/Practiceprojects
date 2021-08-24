import React, { Component } from "react";

export default class ClassComponentUses extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Use me anywhere",
    };
  }
  render() {
    return (
      <div>
        <button>{this.state.msg}</button>
      </div>
    );
  }
}
