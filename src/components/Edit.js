import React from 'react'
import { withRouter } from "react-router";

class Edit extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      todo: ''
    }
  }


  componentDidMount() {

    const todo = this.props.state.todos.find(e => {return e.id == this.props.match.params.id})
    this.setState({
      id: todo.id,
      name: todo.name,
      todo: todo.todo,
    })

  }
  render() {
    return (
      <div className='edit'>
        <h1>Edit todo </h1>
        <input
          name='name'
          onChange={(e) => {this.props.onChange(e)}}
          value={this.props.state.create_name}
          placeholder={this.state.name}
          type='text'
        />
        <input
          name='todo'
          onChange={(e) => {this.props.onChange(e)}}
          value={this.props.state.create_todo}
          placeholder={this.state.todo}
          type='text'
        />
        <button onClick={() => {this.props.save_edit(this.state.id)}}>
          save
        </button>
      </div>
    )
  }
}

export default withRouter(Edit)
