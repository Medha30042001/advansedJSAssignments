
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function displayTodos(){
    let res = await fetch(BASE_URL);
    let data = await res.json();

    let todos = data.slice(0, 20);

    renderTodos(todos);
}

document.addEventListener("DOMContentLoaded", displayTodos);

export function renderTodos(todos){
    let container = document.getElementById("container");
    container.innerHTML = "";

    todos.forEach(todo => {
        let card = document.createElement("div");
        card.className = "card";

        let userId = document.createElement("p");
        userId.textContent = `User ID : ${todo.userId} |`;

        let id = document.createElement("p");
        id.textContent = `Id : ${todo.id} |`;

        let title = document.createElement("h3");
        title.textContent = `Title : ${todo.title}`;

        let completed = document.createElement("p");
        completed.textContent = ` | Completed : ${todo.completed}`;

        card.append(userId, id, title, completed);
        container.appendChild(card);
    });
}