import React, { Component } from 'react'

export default class componentName extends Component {
      render() {

            const arr = [10, 20, 30, 40];
            const newArr = arr.map(num=>{
                  return<li>{num}</li>

            })

            return (
              <div>
                <ul>
                  <li> {newArr} </li>
                </ul>
              </div>
            );
      }
}
