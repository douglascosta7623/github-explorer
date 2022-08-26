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


      function reset(){
       setCounter(counter = 0);
          }
  return (
    <div>
      <h2>
    {counter}
      </h2>
      <button type="button" onClick={count}>Increment</button>

      <button type="button" onClick={decrement}>Decrement</button>

      <button type="button" onClick={reset}>Reset</button>
    </div>
  )
}