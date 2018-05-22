import React, { Component } from 'react';
import AddNewTodoForm from './AddNewTodoForm';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <AddNewTodoForm />
      </div>
    );
  }
}

export default TodoApp;
