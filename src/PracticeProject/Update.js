import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "My Name is Farjana K..",
    };
    this.updateSetState = this.updateSetState.bind(this);
  }

  updateSetState() {
    this.setState({
      msg: "Its a update tutorial",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>SET STATE</button>
      </div>
    );
  }
}
