// import React, { useState, useEffect } from 'react';
// import { Switch, Route, useHistory } from 'react-router-dom';
// import TodoList from './components/TodoList';
// import TodoEdit from './components/TodoEdit';
//
// import './App.css';
// const todoData = [
//   {
//     id: 1,
//     title: 'test',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'test2',
//     completed: false,
//   },
//   {
//     id: 3,
//     title: 'test3',
//     completed: true,
//   },
// ];
// // helper function
// function isExist(arr, input) {
//   if (input === '') {
//     return true;
//   }
//   if (arr.length === 0) {
//     return false;
//   }
//   for (let item of arr) {
//     if (item.title.toLowerCase() === input.toLowerCase()) {
//       return true;
//     }
//   }
//
//   return false;
// }
//
// function getDataFromLstorage() {
//   const data = JSON.parse(localStorage.getItem('newTodo'));
//   return data ? data : [];
// }
//
// function modifyLocalStorage(id) {
//   const dataFromLstorage = getDataFromLstorage();
//   dataFromLstorage.forEach((item) => {
//     if (item.id === id) {
//       item.completed = !item.completed;
//     }
//   });
//   localStorage.setItem('newTodo', JSON.stringify(dataFromLstorage));
// }
//
// const App = (props) => {
//   const [todos, setTodos] = useState([]);
//   const [uniqId, setUniqId] = useState(21);
//   const [input, setInput] = useState('');
//
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('mount');
//         const dataFromLstorage = getDataFromLstorage();
//         if (dataFromLstorage.length > 0) {
//           console.log('log');
//           setTodos([...dataFromLstorage]);
//         } else {
//           setTodos([...data.splice(0, 20)]);
//         }
//       });
//   }, []);
//
//   let history = useHistory();
//
//   const redirect = (id) => {
//     history.push(`edit/${id}`);
//   };
//
//   // event handlers
//   const addTodo = () => {
//     if (!isExist(todos, input)) {
//       const newTodo = [
//         {
//           id: uniqId,
//           title: input,
//           completed: false,
//         },
//       ];
//       const dataFromLstorage = getDataFromLstorage();
//       localStorage.setItem(
//         'newTodo',
//         JSON.stringify([...newTodo, ...dataFromLstorage])
//       );
//       setUniqId(uniqId + 1);
//       setTodos([...newTodo, ...todos]);
//       setInput('');
//     }
//     return null;
//   };
//
//   const onEdit = (id) => {
//     redirect(id);
//   };
//
//   const onDone = (id) => {
//     todos.forEach((item) => {
//       if (item.id === id) {
//         item.completed = !item.completed;
//       }
//     });
//     modifyLocalStorage(id);
//     setTodos([...todos]);
//   };
//
//   const onDelete = (id) => {
//     console.log('deleted');
//     const newTodos = todos.filter((item) => item.id !== Number(id));
//
//     const dataFromLstorage = getDataFromLstorage();
//     const newTodosForLocalS = dataFromLstorage.filter(
//       (item) => item.id !== Number(id)
//     );
//     localStorage.setItem('newTodo', JSON.stringify(newTodosForLocalS));
//     setTodos([...newTodos]);
//   };
//
//   const onSave = (value, id) => {
//     todos.forEach((item) => {
//       if (item.id === Number(id)) {
//         item.title = value;
//       }
//     });
//     const dataFromLstorage = getDataFromLstorage();
//     dataFromLstorage.forEach((item) => {
//       if (item.id === Number(id)) {
//         item.title = value;
//       }
//     });
//     localStorage.setItem('newTodo', JSON.stringify(dataFromLstorage));
//     setTodos([...todos]);
//   };
//
//   return (
//     <div className='container'>
//       <Switch>
//         <Route
//           path='/'
//           exact
//           render={(props) => (
//             <TodoList
//               {...props}
//               todos={todos}
//               onEdit={onEdit}
//               onDone={onDone}
//               onDelete={onDelete}
//               addTodo={addTodo}
//               input={input}
//               setInput={setInput}
//             />
//           )}
//         />
//         <Route
//           path='/edit/:id'
//           render={(props) => (
//             <TodoEdit
//               {...props}
//               todos={todos}
//               setTodos={setTodos}
//               onSave={onSave}
//               onDelete={onDelete}
//             />
//           )}
//         />
//       </Switch>
//     </div>
//   );
// };
//
// export default App;













// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import TodoList from './components/TodoList'
// import Edit from './components/Edit'
// import Navbar from './components/Navbar'
//
//
// const data = [
//   {
//     data:'dtat',
//     todos: [],
//   }
// ];
//
//
// // data[0].todos = data;
// const App = () => {
//     const [state, setState] = useState(data)
//     const [title, setTitle] = useState('create new todo list')
//     const [warn_name, setWarn_name] = useState('')
//     const [add, setAdd] = useState(false)
//     const [create_todo, setCreate_todo = useState('')
//     const [todos, setTodos] = useState([])
//
//
//   const add = () => {
//     // setState([])
//   }
//
//   const create = () => {
//     if (create_todo === '') {
//       setWarn_name({warn_name: 'warn'})
//     } else {
//       const exist = state.find(e => {return e.title === create_todo})
//       if (exist) {
//         setWarn_name('warn')
//         setCreate_todo(create_title: state.create_todo + ' is already exist'})
//       } else {
//         let thisId = state.create_todo + Math.random()
//         const new_todo = {
//           userId: thisId,
//           id: thisId,
//           title: state.create_todo,
//           completed: false
//         }
//         state.todos.push(new_todo)
//         setState({add: false, create_todo: ''})
//       }
//     }
//     console.log('todos ', state.todos)
//   }
//
//
//
//   const onChange = (e) => {
//     setState({create_todo: e.target.value, warn_name: ''})
//   }
//
//
//   const cancel = () => {
//     setState({ create_todo: ''})
//   }
//
//
//   const done = (id) => {
//     state.todos.filter(e => {
//       if (e.id === id) {
//         e.completed = !e.completed
//       }
//     })
//     setState({todos: state.todos})
//   }
//
//
//   const save_edit = (id) => {
//     if (state.create_todo=== '') {
//       return
//     }
//     state.todos.filter(e => {
//       if (e.id === id) {
//         e.title = state.create_todo
//       }
//     })
//     setState({ create_todo: '' })
//   }
//
//
//   const delete_todo = (id) => {
//     const copy = [...state.todos]
//     const todo = copy.filter(e => {return e.id !== id})
//     setState({todos: todo})
//   }
//
//
//
//
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(chunk => chunk.json())
//     .then(data => {
//       setTimeout(() => {
//          setState(data.slice(0, 10))
//       }, 1000);
//     })
//   }, [])
//
//
//
//     return (
//       <Router>
//
//         <Navbar text={state.add} add={add} />
//
//         <div className={state.add ? 'open' : 'close'}>
//           <div className='add'>
//             <h1>{title.create_title}</h1>
//             <input
//               onChange={onChange}
//               value={state.create_todo} type='text'
//               placeholder='add todo  . . .'
//               className={state.warn_name}
//             /><br/>
//             <button onClick={create}>create todo</button>
//           </div>
//         </div>
//
//         <div className={state.add ? 'close' : 'open'}>
//           <Switch>
//
//             <Route  exact path='/'>
//               <TodoList
//                 delete={delete_todo}
//                 cancel={cancel}
//                 todos={state}
//                 edit={save_edit}
//                 done={done}
//                 />
//             </Route>
//
//             <Route exact path="/:id">
//               <Edit
//                 onChange={onChange}
//                 state={state}
//                 save_edit={save_edit}
//               />
//             </Route>
//
//
//
//           </Switch>
//         </div>
//
//       </Router>
//     )
// }
//
// export default App;



















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
      create_todo: '',
      todos: []
    }
  }


  onChange = (e) => {
    this.setState({create_todo: e.target.value, warn_name: ''})
  }


  add = () => {
    this.setState({add: !this.state.add, warn_name: '', create_todo: ''})
  }


  cancel = () => {
    this.setState({ create_todo: ''})
  }


  delete = (id) => {
    const copy = [...this.state.todos]
    const todo = copy.filter(e => {return e.id !== id})
    this.setState({todos: todo})
  }


  create = () => {
    if (this.state.create_todo === '') {
      this.setState({warn_name: 'warn'})
    } else {
      const exist = this.state.todos.find(e => {return e.title === this.state.create_todo})
      if (exist) {
        this.setState({warn_name: 'warn', create_title: this.state.create_todo + ' is already exist'})
      } else {
        let thisId = this.state.create_todo + Math.random()
        const new_todo = {
          userId: thisId,
          id: thisId,
          title: this.state.create_todo,
          completed: false
        }
        this.state.todos.push(new_todo)
        this.setState({add: false, create_todo: ''})
      }
    }
    console.log('hey ', this.state.todos)
  }


  done = (id) => {
    this.state.todos.filter(e => {
      if (e.id === id) {
        e.completed = !e.completed
      }
    })
    this.setState({todos: this.state.todos})
  }






  save_edit = (id) => {
    if (this.state.create_todo=== '') {
      return
    }
    this.state.todos.filter(e => {
      if (e.id === id) {
        e.title = this.state.create_todo
      }
    })
    this.setState({ create_todo: '' })
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(chunk => chunk.json())
    .then(data => {
      setTimeout(() => {
         this.setState({
           todos: data.slice(0, 10)
         })
      }, 0);
    })
  }


  render() {
    return (
      <Router>

        <Navbar text={this.state.add} add={this.add} />

        <div className={this.state.add ? 'open' : 'close'}>
          <div className='add'>
            <h1>{this.state.create_title}</h1>
            <input
              onChange={this.onChange}
              value={this.state.create_todo} type='text'
              placeholder='add todo  . . .'
              className={this.state.warn_name}
            /><br/>
            <button onClick={this.create}>create todo</button>
          </div>
        </div>

        <div className={this.state.add ? 'close' : 'open'}>
          <Switch>

            <Route  exact path='/'>
              <TodoList
                delete={this.delete}
                cancel={this.cancel}
                todos={this.state.todos}
                edit={this.edit}
                done={this.done}
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
