export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function loadTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export function deleteTodo(id) {
  let todos = loadTodos();
  todos = todos.filter(todo => todo.id !== id);
  saveTodos(todos);
}

export function toggleCompleted(id) {
  let todos = loadTodos();
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos(todos);
}
