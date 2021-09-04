import React from 'react'

 function  Student (props)
 {
    return (
      <div>
        <h3>{props.name} </h3>
        <h2>Scored {Math.random() * 100}</h2>
        <p> Marks{props.children} In Math</p>
      </div>
    );
}

export default Student;