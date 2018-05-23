import { ADD, TOGGLE, REMOVE } from '../reducers/todos';

export const addTodo = text => ({
  type: ADD,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE,
  id
})

export const removeTodo = id => ({
  type: REMOVE,
  id
})