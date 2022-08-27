import './styles/global.scss';
import {RepositoryList} from './components/RepositoryList';
import { Counter } from './components/Counter';

export function App(){
  // throw new Error('Deu ruim!')


  return (
  <>
  <section className='container'>
  <h1 className='title-main'>Primeiro Projeto em React</h1>

  <p className='description-project'>Utilizando a api do GitHub, o projeto permite listar os repositórios do usuário passado com parametro (Exemplo: douglascosta7623).</p>
  <RepositoryList/>
  </section>
  </>
  )

}