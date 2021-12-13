import React, { Component } from 'react'
import Image1 from './Images/img1.png'
import Image2 from './Images/img2.png'
import Ex2 from './Ex2'
export default class Ex1 extends Component {
      render() {
            return (
              <div className="container text-center">
                <Ex2 image1={Image1} />
                <br/>
                <Ex2 image1={Image2} />
              </div>
            );
      }
}
