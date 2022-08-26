import { useState } from "react";

//se tem use = hook -> gancho
export function Counter(){
  let [counter, setCounter] = useState(0);
  function count(){
    
    setCounter(counter += 1) 
    
  }

  function decrement(){
    counter <= 0 ? counter=0 : setCounter(counter -= 1);
    
  }
  return (
    <div>
      <h2>
    {counter}
      </h2>
      <button type="button" onClick={count}>Increment</button>

      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}