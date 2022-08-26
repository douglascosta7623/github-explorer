import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository="unform1"/>
        <RepositoryItem repository="unform2"/>
        <RepositoryItem repository="unform3"/>
        <RepositoryItem repository="unform4"/>
      </ul>
    </section>
  );
}