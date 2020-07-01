import  React, { useEffect,useState } from 'react'

import { TableComponent,MenuItem,TablePage } from './style'

import api from '../../utils/api'
import completed from '../../assets/images/completed.svg'
import notCompleted from '../../assets/images/notcompleted.svg'

const Table = () =>{
      const [todos, setTodos] = useState([])
      const [filter, setFilter] = useState(['all'])
      const [filteredTodos, setFilteredTodos] = useState(todos)
      const [word, setWord] = useState('');
      
    useEffect(() =>{
        api.get('/todos')
          .then(res => {
            setTodos(res.data)
          })
        .catch(err => console.log(err))
    }, [])

    useEffect(() =>{
      setFilteredTodos(todos)
    },[todos])

    useEffect(() => {
      const newArray = todos.filter(e => e.title.indexOf(word) !== -1);
      setFilteredTodos(newArray);
  }, [word, todos])
  return(
    <TablePage>
    <ul>
    <input 
                    type="text"
                    value={word}
                    onChange={e => setWord(e.target.value)}
                />
      <MenuItem 
      active={filter === 'all'}
      onClick={() => setFilter('all')}>
      All
      </MenuItem>

      <MenuItem  
      active={filter === 'notCompleted'}
      onClick={() => setFilter('notCompleted')}>
      Not Completed
      
      </MenuItem>

      <MenuItem  
      active={filter === 'Completed'}
      onClick={() => setFilter('Completed')}>

      Completed
      
      </MenuItem>
    </ul>
  <TableComponent>
        {
          filter === 'notCompleted' ? (
              filteredTodos.map(todo => (
              todo.completed === false && 
              <div key={todo.id}>
                  <h3>
                      {todo.title}
                  </h3>
                  
                  {
                      todo.completed ?
                      <img src={completed} alt="Completed"/> :
                      <img src={notCompleted} alt="Not Completed"/>
                  }
              </div>
          ))
          ) : filter === 'Completed' ? (
              filteredTodos.map(todo => (
              todo.completed === true &&
              <div key={todo.id}>
                  <h3>
                      {todo.title}
                  </h3>
                  
                  {
                      todo.completed ?
                      <img src={completed} alt="Completed"/> :
                      <img src={notCompleted} alt="Not Completed"/>
                  }
              </div>
          ))
          ) : (
              filteredTodos.map(todo => (
              <div key={todo.id}>
                  <h3>
                      {todo.title}
                  </h3>
                  
                  {
                      todo.completed ?
                      <img src={completed} alt="Completed"/> :
                      <img src={notCompleted} alt="Not Completed"/>
                  }
              </div>
          ))
          )  
        }



      </TableComponent>
      </TablePage>
  )
}

export  default Table