import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList'
import Edit from './components/Edit'
import Navbar from './components/Navbar'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      create_title: 'create new todo list',
      warn_name: '',
      add: false,
      create_name: '',
      create_todo: '',
      todos: []
    }
  }


  onChange = (e) => {
    if (e.target.name === 'name') {
      this.setState({create_name: e.target.value})
    } else if (e.target.name === 'todo') {
      this.setState({create_todo: e.target.value})
    }
    this.setState({warn_name: ''})
  }

  add = () => {
    this.setState({add: !this.state.add, warn_name: '', create_name: '', create_todo: ''})
  }


  create = () => {
    if (this.state.create_name === '') {
      this.setState({warn_name: 'warn'})
    } else {
      const exist = this.state.todos.find(e => {return e.name === this.state.create_name})
      if (exist) {
        this.setState({warn_name: 'warn', create_title: this.state.create_name + ' is already exist'})
      } else {

        const new_todo = {
          id: this.state.create_name + Math.random(),
          name: this.state.create_name,
          todo: this.state.create_todo,
          done: false
        }
        this.state.todos.push(new_todo)
        this.setState({add: false, create_name: '', create_todo: ''})
      }
    }
  }

  delete = (id) => {
    const copy = [...this.state.todos]
    const todo = copy.filter(e => {return e.id !== id})
    this.setState({todos: todo})
  }

  save_edit = (id) => {
    if (this.state.create_name === '') {
      return
    }
    // const temp = this.state.todos.filter(e => {
    //   return e.id == id
    // })


    console.log('id', id)

  }




  render() {
    return (
      <Router>

        <Navbar text={this.state.add} add={this.add} />

        <div className={this.state.add ? 'open' : 'close'}>
          <div className='add'>
            <h1>{this.state.create_title}</h1>
            <input  onChange={this.onChange} name='name' value={this.state.create_name} className={this.state.warn_name} type='text'  placeholder='your name  . . .'/><br/>
            <input onChange={this.onChange} name='todo' value={this.state.create_todo} type='text'  placeholder='add todo  . . .'/><br/>
            <button onClick={this.create}>create todo</button>
          </div>
        </div>

        <div className={this.state.add ? 'close' : 'open'}>
          <Switch>

            <Route  exact path='/'>
              <TodoList
                delete={this.delete}
                todos={this.state.todos}
                edit={this.edit}
              />
            </Route>

            <Route exact path="/:id">
              <Edit
                onChange={this.onChange}
                state={this.state}
                save_edit={this.save_edit}
              />
            </Route>



          </Switch>
        </div>

      </Router>
    )
  }
}
