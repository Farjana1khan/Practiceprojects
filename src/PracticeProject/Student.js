import React, { Component, } from 'react'

 class Student extends Component {


    render() {
        return (
            <div className="score">
                <h1>Score   {Math.random()}  Marks</h1>
            </div>
        )
    }
}

export default Student
