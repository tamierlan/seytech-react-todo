import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdDoneAll }  from 'react-icons/io'

  export default function TodoList(props) {

    return (
      props.todos.map(todo => {

        return (
          <div key={todo.id} className={todo.done ? 'todos todo-done' : 'todos'}>

            <div className='name'>
              <span>{todo.name}</span>
            </div>

            <div className='todo'>
              <span>{todo.todo}</span>
            </div>

            <div className='buttons'>
              <button className={todo.done ? 'todo-done' : ''} onClick={() => {props.delete(todo.id)}}>Delete</button>
              <button className={todo.done ? 'todo-done' : ''} onClick={() => {props.done(todo.id)}}>Done</button>
              <Link to={`/${todo.id}`}>
                <button className={todo.done ? 'todo-done' : ''}>Edit</button>
              </Link>
              {todo.done ? <IoMdDoneAll className='mark' /> : ''}     
            </div>
          </div>
        )
      })
  )
}
