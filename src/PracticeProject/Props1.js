import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return (
          <h2>I am a {this.props.brand}!</h2>
    );
  }
}

class Garage extends React.Component {
  render() {
    const carname = "Audi";
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car brand={carname} />
      </div>
    );
  }
}
export default Garage;

 ReactDOM.render(<Garage />, document.getElementById('root'));