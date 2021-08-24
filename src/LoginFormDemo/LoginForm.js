import React, { Component } from "react";
import ReactSelect from "react-select";
import "./LoginForm.css";
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: " ",
        email: " ",
        password: " ",
        confirmpassword: "",
        gender: " ",
        mobile: " ",
        zipcode: " ",
        language: " ",
        country: " ",
      },

      formErorrs: {
        name: " ",
        email: " ",
        password: " ",
        confirmpassword: "",
        gender: " ",
        mobile: " ",
        zipcode: " ",
        language: " ",
        country: " ",
      },
    };

    this.countryList = [
      { value: "india", label: "India" },
      { value: "china", label: "China" },
      { value: "us", label: "US" },
    ];

    this.languageList = [
      { value: "english", label: "English" },
      { value: "hindi", label: "Hindi" },
      { value: "spanish", label: "Spanish" },
      { value: "arabic", label: "Arabic" },
    ];
  }

  validateNumber = (evt) => {
    var theEvent = evt || window.event;

    if (theEvent.type === "paste") {
      key = theEvent.clipboardData.getData("text/plain");
    } else {
      var key = theEvent.KeyCode || theEvent.which;
      key = String.fromCharCode(key);
    }

    var regex = /[0-9]|\./;
    if (!regex(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDeafult) theEvent.preventDeafult();
    }
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErorrs } = this.State;
    let formObj = {};

    if (name === "language") {
      if (checked) {
        formObj = { ...form };
        formObj[name].push(value);
      } 
      else 
      {
        formObj = {
          ...form,
          [name]: form[name].filter((x) => x !== value),
        };
      }
    } 
    else
     {
      formObj = {
        ...form,
        [name]: value,
      };
    }

    this.setState({ form: formObj }, () => {
        if (!Object.keys(formErorrs).includes(name)) return;

        let formErrorsObj = {};
        if (name === "password" || name === "confirmpassword");
        {
          let refValue = this.state.form[
            name === "password" ? "confirmpassword" : "password"
          ];

          const errorMsg = this.validateField(name, value, refValue);
          formErrorsObj = { ...formErorrs, [name]: errorMsg };
          if (!errorMsg && refValue) {
            formErrorsObj.confirmpassword = null;
            formErrorsObj.password = null;
          };
        };
        
        else
        {
          const errorMsg = this.validateField(
            name, 
            name === "language" ? this.state.form["langauge"] : value

          );
          formErrorsObj = { ...formErorrs, [name]: errorMsg};
        }

        this.setState({formErorrs, formErrorsObj});
      });
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refvalue = null;
      if (x === "password" || x === "confirmpassword") {
        refvalue = form[x === "password" ? "confirmpassword" : "password"];
      }

      const msg = validateFunc(x, form[x], refvalue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  validateField = (name, form, refvalue) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value) errorMsg = "Please enter your name";
        break;

      case "email":
        if (!value) errorMsg = "Please enter your email";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          break;

      case "password":
        if (!value) errorMsg = "Please enter your password";
        else if (refValue && value !== refValue)
          errorMsg = "password and confirmpassword does not match";
        break;

      case "confirmpassword":
        if (!value) errorMsg = "Please enter your confirmpassword";
        else if (refValue && value !== refValue)
          errorMsg = "password and confirmpassword does not match";
        break;

      case "gender":
        if (!value) errorMsg = "please select gender";
        break;

      case "mobile":
        if (!value) errorMsg = "please select mobile number";
        break;

      case "zipcode":
        if (!value) errorMsg = "please enter zipcode";
        break;

      case "language":
        if (value.lenght === 0) errorMsg = "please choose langauage";
        break;

      case "country":
        if (!value) errorMsg = "please select country";
        break;

      default:
        break;
    }
  };

  handleSubmit = () => {
    const { form, formErorrs } = this.state;
    const errorObj = this.validateForm(form, formErorrs, this.validateField);
    if ((Object.Key = errorObj.lenght !== 0)) {
      this.setState({ formErorrs: { ...formErorrs, ...errorObj } });
      return false;
    }
    console.log("Data:", form);
  };

  render() {
    const { form, formErorrs } = this.state;
    return (
      <div className="signup">
        <p className="title">SignUp</p>

        <div className="App">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Name:<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErorrs.name && (
                <span className="err">{formErorrs.name}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Email:<span>*</span>
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={form.email}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErorrs.email && (
                <span className="err">{formErorrs.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Password:<span>*</span>
              </label>
              <input
                type="text"
                name="password"
                className="form-control"
                value={form.password}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErorrs.password && (
                <span className="err">{formErorrs.password}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                ConfirmPassword:<span>*</span>
              </label>
              <input
                type="text"
                name="confirmpassword"
                className="form-control"
                value={form.confirmpassword}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErorrs.confirmpassword && (
                <span className="err">{formErorrs.confirmpassword}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Mobile:<span>*</span>
              </label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                value={form.mobile}
                onChange={this.handleChange}
                onBlur={this.handleChange}
                onKeyPress={this.validateNumber}
              />
              {formErorrs.mobile && (
                <span className="err">{formErorrs.mobile}</span>
              )}
            </div>

            <div className="form-group">
              <label className="mr-3">
                Gender:<span>*</span>
              </label>
              <div className="form-control pt-1 p-0 border-0">
                <label className="mr-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={this.handleChange}
                    checked={form.gender === "male"}
                  />{" "}
                  Male
                </label>

                <label className="mr-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={this.handleChange}
                    checked={form.gender === "female"}
                  />{" "}
                  Female
                </label>

                <label className="mr-2">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={this.handleChange}
                    checked={form.gender === "other"}
                  />{" "}
                  Other
                </label>
              </div>
              {formErorrs.gender && (
                <span className="err">{formErorrs.gender}</span>
              )}
            </div>

            <div className="form-group">
              <label className="mr-3">
                Language:<span>*</span>
              </label>
              <div className="form-control p-0 pt-1 border-0">
                {this.languageList.map((x, i) => {
                  return (
                    <label key={i} className="mr-2">
                      <input
                        type="checkbox"
                        name="language"
                        className="form-control"
                        value={x.value}
                        onChange={this.handleChange}
                        checked={form.language.includes(x.value)}
                      />{" "}
                      {x.label}
                    </label>
                  );
                })}
              </div>
              {formErorrs.language && (
                <span className="err">{formErorrs.language}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Zip Code:<span>*</span>
              </label>
              <input
                type="number"
                name="zipcode"
                className="form-control"
                value={form.zipcode}
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {formErorrs.zipcode && (
                <span className="err">{formErorrs.zipcode}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Country:<span>*</span>
              </label>
              <ReactSelect
                type="text"
                name="country"
                options={this.countryList}
                value={this.countryList.find((x) => x.value === form.country)}
                onChange={(e) =>
                  this.handleChange({
                    target: {
                      name: "country",
                      value: e.value,
                    },
                  })
                }
              />{" "}
              {formErorrs.country && (
                <span className="err">{formErorrs.country}</span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="button"
            className="btn btn-danger"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
