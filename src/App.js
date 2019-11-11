import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

componentDidMount() {
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => this.setState({ todos: res.data}))
}
  // Toggle Complete 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [
      ...this.state.todos.filter(todo => todo.id !== id)
    ]}))
    
    this.setState({ todos: [
      ...this.state.todos.filter(todo => todo.id !== id)
    ]});
  }

  //Add ToDo 
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false
  })
  .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  } 

  render() {

    return (
      <Router> 
      <div className = "App">
        <div className = 'container'>
        <Header />
        <Route exact path = "/" render ={props => (
          <React.Fragment>
            
        <AddToDo addTodo = {this.addTodo}/>
        <Todos todos = {this.state.todos}
         markComplete = {this.markComplete}
        delTodo = {this.delTodo} />
          </React.Fragment>
        )} />
        
        <Route path = "/about" component = {About} />
        </div>
      </div>
      </Router>
    );
  }
}
export default App;
