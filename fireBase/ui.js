import { fetchTodos } from "./fetch.js";
import { loadTodos, saveTodos, deleteTodo, toggleCompleted } from "./todoLogic.js";

const container = document.getElementById("todo-container");

async function init() {
  // Fetch only if not already saved
  if (loadTodos().length === 0) {
    const todos = await fetchTodos();
    saveTodos(todos);
  }
  renderTodos();
}

function renderTodos() {
  const todos = loadTodos();
  container.innerHTML = ""; // clear

  if (todos.length === 0) {
    container.innerHTML = `<p>No Todos Available</p>`;
    return;
  }

  todos.forEach(todo => {
    const div = document.createElement("div");
    div.className = "todo";

    div.innerHTML = `
      <div>
        <p><strong>${todo.title}</strong></p>
        <p class="${todo.completed ? "completed" : ""}">
          Status: ${todo.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
    `;

    // Buttons container
    const btnBox = document.createElement("div");
    btnBox.className = "buttons";

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.onclick = () => {
      toggleCompleted(todo.id);
      renderTodos();
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      deleteTodo(todo.id);
      renderTodos();
    };

    btnBox.appendChild(toggleBtn);
    btnBox.appendChild(deleteBtn);
    div.appendChild(btnBox);

    container.appendChild(div);
  });
}

init();
