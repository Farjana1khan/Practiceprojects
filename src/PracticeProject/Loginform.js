import React, { Component } from "react";
import "./Loginform.css";
//import image from "./images/img4.jpg";
// import ValidationLoginform from './ValidationLoginform';

class Loginform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      city: "",
    };

    // this.nameField = this.nameField.bind(this);
    // this.emailField = this.emailField.bind(this);
    //     this.passField = this.passField.bind(this);
    //     this.cityField = this.cityField.bind(this);
    this.loginClick = this.loginClick = this.loginClick.bind(this);
  }

  loginClick(event) {
    console.log(
      this.state.username +
        " " +
        this.state.emailname +
        " " +
        this.state.passname +
        " " +
        this.state.cityname
    );
  }

  nameField = (e) => {
    this.setState({ username: e.target.value });
  };

  emailField = (e) => {
    this.setState({ emailname: e.target.value });
  };

  passField = (e) => {
    this.setState({ passname: e.target.value });
  };

  cityField = (e) => {
    this.setState({ cityname: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <form id="form-control" className="myform">
          <h1>Registration Form</h1>
          <div id="form-group">
            <label htmlFor="name">Username</label>

            <input
              useRef="username"
              onChange={this.nameField}
              type="text"
              className="form-control"
              name="name"
              placeholder="Username"
            />
          </div>

          <div id="form-group">
            <label htmlFor="email">Email</label>
            <input
              useRef="emailname"
              onChange={this.emailField}
              type="text"
              className="form-control"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div id="form-group">
            <label htmlFor="pass">Password</label>
            <input
              useRef="passname"
              onChange={this.passField}
              type="password"
              className="form-control"
              name="pass"
              placeholder="Password"
            />
          </div>
          <div id="form-group">
            <label htmlFor="city">City</label>
            <select
              name="city"
              className="form-control"
              useRef="cityname"
              onChange={this.cityField}
            >
              <option>Select</option>
              <option>Select</option>
              <option>Gurgoan</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>United Kingdom</option>
            </select>
            {/* <input type="text" className="form-control" id="city" /> <br/> */}
          </div>
          <div id="form-group">
            {/* <img src={image} alt="alter" width="140px" /> */}

            <input
              type="button"
              className="btn btn-success form-control"
              onClick={this.loginClick}
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Loginform;
