import React, {useState} from 'react'
import './App.css';
const Message = () =>{
      const [message, setMessage] = useState(
            "please update your browser as soon as possible"
      );
// const sayHello = () =>{
//       console.log("hello");
//};

const [show,setShow] = useState(true);

const update = () =>{
     setMessage("your browser successfully updated"); 
setTimeout(()=>setShow(false),2000);

};


if(show){

return(
      <div className="message">
      <p>{message}</p>
      <button onClick={update}>Update Now</button>
      </div>
);
}
else{
      return <h1>Your browser up to date</h1>
}


};
export default Message;