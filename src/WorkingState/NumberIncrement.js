import React from "react";
var Product = React.createClass({
  getInitialState: function () {
    return { qty: 0 };
  },

  buy: function () {
    this.setState({ qty: this.state.qty + 1 });
  },

  render: function () {
    return (
      <div>
        <p>Android - $99</p>
        <button onClick={this.buy}>Buy</button>
        <h3>Qty:{this.state.qty}items</h3>
      </div>
    );
  },
});

React.render(<Product />, document.getElementById("root"));
