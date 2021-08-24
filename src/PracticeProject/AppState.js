
import React, { Component } from 'react'
import Student from './State';
 class AppState extends Component {

state ={
    student: [
        {name:"Khan"},
         {name:"Kun"},
          {name:"Ira"}
    ]
}
    render() {
        return (
            <div>
                
            <div className="App">
            <h1>Class Based component</h1>
            </div>

            <div className="App1">
            
            <Student name={this.state.student[0].name}/>
            <Student name={this.state.student[1].name}/>
            <Student name={this.state.student[3].name}/>
           
        </div>
            </div>
        );
    }
}

export default AppState;

