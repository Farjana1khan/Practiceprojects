import React, { Component } from "react";

export default class DidMountDidUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: " ",
    };
  }

  componentDidMount() {
    document.title = "Class counter : ${this.state.counter} - clue";
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("componentDidUpdate called!");
      document.title = `Class Counter: ${this.state.counter} - Clue Mediator`;
    }
  }

  render() {
    //     const [counter, setCounter] = useState(0);
    //     const [name, setState] = useState("");
    return (
      <div>
        <div>
          <span>
            Class Example: Component DidMount and Componenet DidUpdate{" "}
          </span>
        </div>

        <input
          type="text"
          value={this.state.name}
          placeholder="Enter name"
          onChange={(e) => setState({ name: e.target.value })}
        />
        <br />
        <input
          type="button"
          value="counter++"
          onClick={() =>
            this.setState((prevState) => ({ counter: prevState.counter + 1 }))
          }
        />
      </div>
    );
  }
}
