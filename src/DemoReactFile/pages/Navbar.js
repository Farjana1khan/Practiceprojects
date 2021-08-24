import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#" class="right">
          Contact
        </a>
      </div>
    );
  }
}

export default Navbar;
