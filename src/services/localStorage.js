const TODOS_KEY = 'TODOS'

export const setTodosInStorage = todos =>
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));

export const getTodosFromStorage = () =>
  JSON.parse(localStorage.getItem(TODOS_KEY)) || undefined;