import React,{useState} from 'react'

const Counter = () =>{
const[counter,setCounter] = useState(0)

const increment = () => setCounter(counter+5);
const decrement = () => setCounter(counter-5);

return(
           

<div>
<h2>Your  current counter </h2>
<div className="input-group mb-3 w-25">
  <div className="input-group-prepend">
    <button className="btn btn-primary" onClick={increment}>+</button>
  </div>
  
  <input type="text" className="form-control"
  value={counter}
   aria-label="Amount (to the nearest dollar)" readOnly/>
  <div className="input-group-append">
    <button className="btn btn-danger" onClick={decrement}>-</button>
  </div>
</div>
</div>


      );

}
export default Counter;