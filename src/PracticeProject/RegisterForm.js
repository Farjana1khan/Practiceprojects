import React, { Component } from "react";
import "./RegisterForm.css";

// import ValidationLoginform from './ValidationLoginform';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        email: "",
        pass: "",
      },
      formErrors: {
        name: null,
        email: null,
        pass: null,
      },

     
    };
  }

    handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter((x) => x !== value),
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value,
      };
    }
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === "pass") {
        let refValue = this.state.form[name === "pass"];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === "language" ? this.state.form["language"] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value) errorMsg = "Please enter Name.";
        break;
      case "email":
        if (!value) errorMsg = "Please enter Email.";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = "Please enter valid Email.";
        break;

      case "pass":
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = "Please enter Password.";

        break;

      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      if (x === "pass") {
        refValue = form[x === "pass"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  loginClick = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }

    console.log("Data: ", form);
  };

  render() {
    const { form, formErrors } = this.state;
    return (
      <div className="App">
        <form id="form-control" className="myform">
          <h1>Registration Form</h1>

          <div id="form-group">
            <label htmlFor="name">Username</label>

            <input
              ref="username"
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            {formErrors.name && <span className="err">{formErrors.name}</span>}
          </div>
          <div id="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref="emailname"
              type="text"
              className="form-control"
              name="email"
              value={form.email}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            {formErrors.email && (
              <span className="err">{formErrors.email}</span>
            )}
          </div>
          <div id="form-group">
            <label htmlFor="pass">Password</label>
            <input
              ref="passname"
              type="password"
              className="form-control"
              name="pass"
              value={form.pass}
              onChange={this.handleChange}
              onBlur={this.handleChange}
            />
            {formErrors.pass && <span className="err">{formErrors.pass}</span>}
          </div>
          <div>
            <input
              type="button"
              className="btn btn-success"
              onClick={this.loginClick}
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default RegisterForm;
