interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <li>
        <strong>{props.repository.name ?? 'Sem nome'}</strong>
        <p>{props.repository.description ?? 'Sem descrição disponivel'}</p>
        <a href={props.repository.html_url ?? 'Sem link disponível'}>
          Link do Projeto
        </a>
      </li>
    </>
  );
}
