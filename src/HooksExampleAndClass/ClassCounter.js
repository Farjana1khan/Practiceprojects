import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // handle button click event
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // handle button click event to add 5 in counter
  handleAddFiveClick = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  };

  render() {
    return (
      <div>
        <b>Counter - Class Component</b>
        <br />
        <br />
        <label>Counter: {this.state.counter}</label>
        <br />
        <br />
        <button onClick={this.handleClick}>Add +1</button>&nbsp;
        <button onClick={this.handleAddFiveClick}>Add +5</button>
      </div>
    );
  }
}

export default ClassCounter;
