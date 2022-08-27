
export function RepositoryItem(props){
  return (
    <>
    <li>
    <strong>{props.repository.name ?? 'Sem nome'}</strong>
    <p>{props.repository.description ?? 'Sem descrição disponivel'}</p>
    <a href={props.repository.html_url ?? 'Sem link disponível'}>Link do Projeto</a>
  </li>
  </>
  )
}