import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v8(),
        title: 'Take out the  trash',
        completed: false
      },
      {
        id: uuid.v8(),
        title: 'dinner with friends',
        completed: true
      },
      {
        id: uuid.v8(),
        title: 'meeting with boss',
        completed: false
      },

    ]
  }
  //toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed

      }
      return todo;
    }) });
  }
  
  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id  !==id )] });
  }

  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v8(),
      title,
      completed: false

    }
    this.setState({ todos: [...this.state.todos, newTodo ] });
  }
  render () {
   return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    </div>
   );
 }
}

export default App;
