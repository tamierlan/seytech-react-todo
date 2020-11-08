import React from 'react'
import { Link } from 'react-router-dom'

  export default function TodoList(props) {
    return (

      props.todos.map(todo => {

        return (
          <div key={todo.id} className='todos'>

            <div className='name'>
              <span>{todo.name}</span>
            </div>

            <div className='todo'>
              <span>{todo.todo}</span>
            </div>

            <div className='buttons'>
              <Link to={`/${todo.id}`}><button>Edit</button></Link>
              <button onClick={() => {props.done(todo.id)}}>Done</button>
              <button onClick={() => {props.delete(todo.id)}}>Delete</button>
            </div>
          </div>
        )
      })
  )
}
