import React from 'react'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h1>
      Enjoy Your Weekend
      </h1>
      <p onClick={props.add}>{props.text ? 'go back' : 'add new todo +'}</p>
    </div>
  )
}
