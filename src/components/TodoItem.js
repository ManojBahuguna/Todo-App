import React from 'react';
import { connect } from 'react-redux';
import Icon from '@fortawesome/react-fontawesome';
import {
  faCheckCircle as checkIcon,
  faTrashAlt as removeIcon
} from '@fortawesome/fontawesome-free-regular';

const TodoItem = ({ todo, dispatch }) => (
  <li className="TodoItem">
    <button className="TodoDoneCheckbox">
      <Icon icon={checkIcon} />
    </button>

    <p className="TodoText">{todo.text}</p>

    <button className="TodoRemoveButton">
      <Icon icon={removeIcon} />
    </button>
  </li>
);

export default connect()(TodoItem);