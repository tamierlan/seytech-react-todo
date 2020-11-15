import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdDoneAll }  from 'react-icons/io'


  export default function TodoList(props) {
    console.log('tommy ', props)

  if (props.todos.length < 1) {
    return (
      <div className='loading'>
        <img src='https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif' alt='img' />
      </div>
    )
  } else {
    return (
      props.todos.map(todo => {

        return (
          <div key={todo.id} className={todo.completed ? 'todos todo-done' : 'todos'}>

            <div className='todo'>
              <span>{todo.title}</span>
            </div>

            <div className='buttons'>
              <button className={todo.completed ? 'todo-done' : ''} onClick={() => {props.delete(todo.id)}}>Delete</button>
              <button className={todo.completed ? 'todo-done' : ''} onClick={() => {props.done(todo.id)}}>{todo.completed ? 'undone' : 'done'}</button>
              <Link to={`/${todo.id}`}>
                <button className={todo.completed ? 'todo-done' : ''}>Edit</button>
              </Link>
              {todo.completed ? <IoMdDoneAll className='mark' /> : ''}
            </div>
          </div>
        )
      })
  )
  }
}
