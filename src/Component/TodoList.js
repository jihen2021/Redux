import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function TodoList() {
  const todos = useSelector(state => state.todos)
    
    return (
        <div className='container '>
            {todos.map((todo)=><TodoItem key={todos.id} todo={todo}/>)}
             
        </div>
    )
}
export default TodoList
