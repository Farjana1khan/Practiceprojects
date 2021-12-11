import React, { Component } from "react";

export default class componentName extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
this.state={
  name: "farjana"
}

    // If we use arrow function there is no need to use to bind 'this' keyword
    //shown as  below
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
   // console.log("button clicked on", this);
    //document.write("Button clicked on... ", this);

    // updateState method
    this.setState({name: "khan"})

    // this.setState(function(state, props){
    //   console.log(props.name);

    // })


  };
  render() {
    return (
      <div>
        <h1>Event Handling Function in class component</h1>
        <h2>Your Name is: {this.state.name} </h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
