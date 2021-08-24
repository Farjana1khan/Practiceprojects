import React, { Component } from "react";
//const React = require("react");
const ReactDom = require("react-dom");

const FormSkeleton = (props) => {
  const { handleSubmit, textInput, handleInput } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={textInput} onChange={handleInput} />
      <button>add </button>
    </form>
  );
};

export default class dynamicradiobutton extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      toDos: [],
      selectedToDo: "",
      printedToDo: "",
    };
  }

  handleTextInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { input, toDos } = this.state;
    const newTodo = input;

    const newToDoList = [...toDos, newTodo];
    if (input) {
      this.setState({
        input: "",
        toDos: newToDoList,
      });
    }
  };

  handleSelected = (e) => {
    this.setState({
      selectedToDo: e.target.value,
    });
  };

  handleSelectedSubmit = () => {
    const { selectedToDo, printedToDo } = this.state;
    const newPrintedToDo = selectedToDo;
    this.setState({
      printedToDo: newPrintedToDo,
    });
  };

  render() {
    const { input, toDos, selectedToDo, printedToDo } = this.state;
    console.log(this.state);
    return (
      <div>
        {" "}
        <h2>Select </h2>
        <FormSkeleton
          handleInput={this.handleTextInput}
          textInput={input}
          handleSubmit={this.handleSubmit}
        />
        {toDos.map((value) => (
          <span>
            {" "}
            {value}{" "}
            <input
              type="radio"
              name="Radio"
              value={value}
              checked={selectedToDo === value}
              onChange={this.handleSelected}
            />
          </span>
        ))}
        {selectedToDo ? (
          <button onClick={this.handleSelectedSubmit}> Submit</button>
        ) : (
          ""
        )}
        {printedToDo ? <p>You selected {selectedToDo} </p> : ""}
      </div>
    );
  }
}
