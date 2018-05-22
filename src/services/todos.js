const addTodo = (todoText, todos) =>
  [
    {
      id: Date.now(),
      text: todoText,
      isDone: false
    },
    ...todos
  ];

const toggleTodoIsDone = (todoId, todos) =>
  todos.map(todo =>
    todo.id === todoId ?
      {
        ...todo,
        isDone: !todo.isDone
      } :
      todo
  );

const removeTodo = (todoId, todos) =>
  todos.filter(todo =>
    todo.id !== todoId
  );

export { addTodo, toggleTodoIsDone, removeTodo };