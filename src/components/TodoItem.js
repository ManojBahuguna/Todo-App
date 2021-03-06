import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import Icon from '@fortawesome/react-fontawesome';
import {
  faCheckCircle as checkIcon,
  faTrashAlt as removeIcon
} from '@fortawesome/fontawesome-free-regular';

class TodoItem extends Component {

  handleTodoToggle = () => {
    const id = this.props.todo.id;
    this.props.dispatch(toggleTodo(id));
  };

  handleTodoRemove = () => {
    const id = this.props.todo.id;
    this.props.dispatch(removeTodo(id));
  }

  render() {
    const { text, isDone } = this.props.todo;
    return (
      <li className={`TodoItem ${isDone ? 'isDone' : ''}`}>
        <button onClick={this.handleTodoToggle} className="TodoDoneCheckbox">
          <Icon icon={checkIcon} />
        </button>

        <p className="TodoText">{text}</p>

        <button onClick={this.handleTodoRemove} className="TodoRemoveButton">
          <Icon icon={removeIcon} />
        </button>
      </li>
    );
  }
}

export default connect()(TodoItem);