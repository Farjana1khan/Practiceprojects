import React, { Component } from "react";

export default class componentName extends Component {
  state = {
    students: [
      { id: 1, name: "farjana", class: "mca" },
      { id: 2, name: "inaya", class: "mba" },
      { id: 3, name: "hunain", class: "ba" },
    ],
  };
  render() {

    const newStudents = this.state.students.map((student) => {
      return (
        <table className="table">
         
          
         
          <tbody>
            <tr>
                  
              <td>{student.id}</td>
              

              <td>{student.name}</td>
            
              <td>{student.class}</td>
            </tr>
          </tbody>
        </table>
      );
    });

    return <div>
          {newStudents}</div>;
  }
}
