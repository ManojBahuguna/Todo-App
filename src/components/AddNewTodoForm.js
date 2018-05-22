import React from 'react';
import { connect } from 'react-redux';
import Icon from '@fortawesome/react-fontawesome';
import saveIcon from '@fortawesome/fontawesome-free-regular/faSave';

const AddNewTodoForm = () => {
  return (
    <form className="AddNewTodoForm">
      <input type="text" />
      <button><Icon icon={saveIcon} /></button>
    </form >
  );
};

export default connect()(AddNewTodoForm);