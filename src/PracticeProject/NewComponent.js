import React from 'react'
function Greating() 
{

      return (
            <div>
            
            <Person />
            <Message />
          
            </div>
      );
}

const Person = () =>  {
      return(
            <div>
           <h1> hiii</h1>
            </div>
      );
}


const Message = () => {
      return(
            <div>
            <p>This is first component</p>
            </div>
      )
}

export default Greating;
 