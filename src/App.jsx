import './styles/global.scss';
import {RepositoryList} from './components/RepositoryList';
import { Counter } from './components/Counter';

export function App(){
  // throw new Error('Deu ruim!')


  return (
  <>
  <h1>Hello World! Douglas Server</h1>
  <RepositoryList/>
  <Counter/>
  </>
  )

}