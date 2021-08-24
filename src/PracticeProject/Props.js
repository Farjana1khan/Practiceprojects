import React from 'react'

 function  Student (props)
 {
    return (
        <div>
             <h1>{props.name} Scored  {Math.random()*100}  Marks</h1>
        </div>
    );
}

export default Student;