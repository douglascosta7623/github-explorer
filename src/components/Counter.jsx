import { useState } from "react";
//imutabilidade - criar um novo espaço na memoria com o temos e adicionamos a nova informação. ao inves de mudar a variavel que já temos
//users = ['user', 'user1', 'user2']
//users.push('user3') -> Estou mudando a memoria da variavel
// com states (imutabilidade)

// newUsers = [...users, 'newUser']
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

// quando rodo a aplicação no webpack server ao salvar o código com novas informações. A aplicação no servidor é reiniciada. Solução contorno REACT FAST REFRESH
