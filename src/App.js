import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/AddToDo';

import TodoItem from './components/TodoItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1, 
        title: 'Take out the rubbish.',
        completed: false
      }, 
      {
        id: 2, 
        title: 'Walk the dog.',
        completed: true
      }, 
      {
        id: 3, 
        title: 'Code some!',
        completed: false
      }
    ], 
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
    this.setState({ todos: [
      ...this.state.todos.filter(todo => todo.id !== id)
    ]});
  }

  render() {
    return (
      <div className = "App">
        <Header />
        <Todos todos = {this.state.todos} markComplete = {this.markComplete}
        delTodo = {this.delTodo} />
        <Addtodo />
      </div>
    );
  }
}
export default App;
