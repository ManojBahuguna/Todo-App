import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import todoReducer from './reducers/todos';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { getTodosFromStorage, setTodosInStorage } from './services/localStorage';

const store = createStore(
  todoReducer,
  getTodosFromStorage() // Get persisted state from local storage
);

// Persist state in localStorage
store.subscribe(() => {
  setTodosInStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
