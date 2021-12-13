// eslint-disable-next-line no-unused-vars
import { color } from 'highcharts';
import React, {useState} from 'react'

import './Exp1.css'
export default function Exp1() {

       const [count, setcount] = useState(0)
      return (
        <div className="container text-center my-5 ">
          <h1>Counter projects using react redux</h1>

          <button
            className="button"
            aria-label="Increment vale"
            style={{ backgroundColor: "green", color: "white"}}
            onClick={() => {
              setcount(count + 1);
            }}
          >
            Increment
          </button>

          <span className="value "  >{count}</span>

          <button
            className="button"
            aria-label="Increment vale"
            style={{ backgroundColor: "red", color: "white"}}
            onClick={() => {
              setcount(count - 1);
            }}
          >
            Decrement
          </button>
        </div>
      );
}
