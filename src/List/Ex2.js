import React, { Component } from 'react'

export default class componentName extends Component {
      render() {
            const arr = [10, 20, 30, 40];

            return (
              <div>
                <ul>
                      <th>counting</th>
                  <li>
                    
                   
                      {arr.map((num) => (
                        <li>{num}</li>
                      ))}
                  
                  </li>
                </ul>
              </div>
            );
      }
}
