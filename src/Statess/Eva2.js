import React from 'react'

export default function Eva2() {

     function  handleclick(e){
           e.preventDefault();
            //document.write("clicked on button")
            console.log("clicked on...");
      }

      return (
            <div>
                  <h1>Event handling function in react</h1>
                  <button onClick={handleclick}>Clicked on</button>
            </div>
      )
}
