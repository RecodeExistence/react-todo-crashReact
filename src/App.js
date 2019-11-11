import React, { Component } from 'react';
import Todos from './components/Todos';
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
  render() {
    return (
      <div className = "App">
        <Todos todos = {this.state.todos} />
      </div>
    );
  }
}
export default App;
