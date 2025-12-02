import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Profile from './App.jsx'
import Tasks from './Tasks.jsx'
import Test from './Teste.jsx'
import ToDoList from './ToDoList.jsx'
import Contatos from './Contatos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className='containter'>
      <Profile />
      <Tasks nomes={['Guilherme', 'Joseane', 'Julia', 'Henrique']}/>
    </div> */}
    <Contatos/>
  </StrictMode>,
)
