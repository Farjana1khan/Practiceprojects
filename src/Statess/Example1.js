import React, { Component } from 'react'

export default class Example1 extends Component {

      constructor(props) {
            super(props)
            this.state = {
              name: this.props.name,
              roll: 8
            };
      }

      render() {
            return (
                  <div>
                        <h5>your name is: {this.state.name} <br/>
                         Roll: {this.state.roll} </h5>
                  </div>
            )
      }
}
