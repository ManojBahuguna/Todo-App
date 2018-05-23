import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id}>todo.text</li>
    ))}
  </ul>
);

const mapStateToProps = todos => ({ todos });

export default connect(mapStateToProps)(TodoList);