import { addTodo, toggleTodoIsDone, removeTodo } from '../services/todos';

const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return addTodo(action.text, state)
    case TOGGLE:
      return toggleTodoIsDone(action.id, state)
    case REMOVE:
      return removeTodo(action.id, state)
    default:
      return state
  }
}

export default todos
