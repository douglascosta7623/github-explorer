import { RepositoryItem } from "./RepositoryItem";

import  "../styles/repositories.scss"
import { useState, useEffect } from "react";

//Link api - https://api.github.com/users/douglascosta7623/repos




// const repository = {
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://github.com/douglascosta7623'
// }

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/douglascosta7623/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  } , [repositories])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}></RepositoryItem>
        })}
        
      </ul>
    </section>
  );
}