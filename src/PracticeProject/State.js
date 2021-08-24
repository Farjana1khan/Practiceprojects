import React from 'react'

 function  Student (props)
 {
    return (
        <div>
             
             <h1>{props.name} Scored  {Math.random()*100}  Marks</h1>
             <p>{props.children} In Math</p>
        </div>
    );
}

export default Student;