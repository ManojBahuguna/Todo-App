import React, { Component } from 'react';
import AddNewTodoForm from './AddNewTodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <AddNewTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
