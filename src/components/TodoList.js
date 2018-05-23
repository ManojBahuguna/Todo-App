import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  todos.length > 0 ?
  <ul className="TodoList">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul> :
  <p className="EmptyTodoMessage">No Todos Added!</p>
);

const mapStateToProps = todos => ({ todos });

export default connect(mapStateToProps)(TodoList);