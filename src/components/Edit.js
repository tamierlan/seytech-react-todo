import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Edit = (props) => {
  const [state, setState] = useState({
    id: '',
    title: ''
  })


//  react hooks       https://reactrouter.com/web/api/history
  useEffect(() => {

    const todo = props.state.todos.find(e => {return e.id == props.match.params.id})
    setState({
      id: todo.id,
      title: todo.title
    })
  },[])
  console.log('hook ', state.title)


  return (
      <div className='edit'>
        <h1>Edit todo </h1>
        <input
          name='todo'
          onChange={(e) => {props.onChange(e)}}
          value={props.state.create_todo}
          placeholder={state.title}
          type='text'
        />
        <button onClick={() => {props.save_edit(state.id)}}>
          {
            props.state.create_todo === '' ? 'save'
            :
            <Link to={`/`}>Save</Link>
          }
        </button >

        <button onClick={props.cancel}>
          <Link to={`/`}>Cancel</Link>
        </button>
      </div>
    )
}

export default withRouter(Edit)










// import React from 'react'
// import { withRouter } from "react-router";
// import { Link } from 'react-router-dom';
//
// class Edit extends React.Component {
//   constructor(props) {
//     super()
//     this.state = {
//       id: '',
//       todo: ''
//     }
//   }
//
//
//   componentDidMount() {
//
//     const todo = this.props.state.todos.find(e => {return e.id == this.props.match.params.id})
//     this.setState({
//       id: todo.id,
//       todo: todo.todo,
//     })
//
//   }
//   render() {
//     return (
//       <div className='edit'>
//         <h1>Edit todo </h1>
//         <input
//           name='todo'
//           onChange={(e) => {this.props.onChange(e)}}
//           value={this.props.state.create_todo}
//           placeholder={this.state.todo}
//           type='text'
//         />
//         <button onClick={() => {this.props.save_edit(this.state.id)}}>
//           {
//             this.props.state.create_todo === '' ? 'save'
//             :
//             <Link to={`/`}>Save</Link>
//           }
//         </button >
//
//         <button onClick={this.props.cancel}>
//           <Link to={`/`}>Cancel</Link>
//         </button>
//       </div>
//     )
//   }
// }
//
// export default withRouter(Edit)
