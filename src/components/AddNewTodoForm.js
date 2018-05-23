import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@fortawesome/react-fontawesome';
import saveIcon from '@fortawesome/fontawesome-free-regular/faSave';
import { addTodo } from '../actions/index';

class AddNewTodoForm extends Component {

  state = {
    input: ''
  };

  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const text = this.state.input;
    if (text.length === 0)
      return;

    this.props.dispatch(addTodo(text));
    this.setState({
      input: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="AddNewTodoForm">
        <input autoFocus value={this.state.input} onInput={this.handleInput} type="text" />
        <button><Icon icon={saveIcon} /></button>
      </form >
    );
  }

}

export default connect()(AddNewTodoForm);