import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import todoReducer from './reducers/todos';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
