import React, { useEffect, Component } from "react";

export default class DidMount extends Component {
//   componentDidMount() {
//     document.title = "Class example: componentDidMount";
//   }


const HookExample = () =>
{
      useEffect(() => {
           
              document.title= " Hook Example"  
       }, []);
}
  render() {
    return (
      <div>
        <span>Class Example: componentDidMount</span>
      </div>
    );
  }
}
