const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const taskCount = document.querySelector("#task-count");
const clearCompletedButton = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll(".filter-button");

const STORAGE_KEY = "todo-task-list";

let todos = loadTodos();
let currentFilter = "all";

renderTodos();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (text === "") {
    todoInput.focus();
    return;
  }

  todos.push({
    id: createTodoId(),
    text,
    completed: false,
  });

  todoInput.value = "";
  saveTodos();
  renderTodos();
});

todoList.addEventListener("click", (event) => {
  const item = event.target.closest(".todo-item");

  if (!item) {
    return;
  }

  const todoId = item.dataset.id;

  if (event.target.matches(".todo-check")) {
    toggleTodo(todoId);
  }

  if (event.target.matches(".delete-button")) {
    deleteTodo(todoId);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    renderTodos();
  });
});

clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

function renderTodos() {
  const visibleTodos = getVisibleTodos();

  todoList.innerHTML = "";

  if (visibleTodos.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-state";
    emptyMessage.textContent = getEmptyMessage();
    todoList.append(emptyMessage);
  }

  visibleTodos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " completed" : ""}`;
    item.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.className = "todo-check";
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `${todo.text}を${todo.completed ? "未完了に戻す" : "完了にする"}`);

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `${todo.text}を削除する`);

    item.append(checkbox, text, deleteButton);
    todoList.append(item);
  });

  updateSummary();
}

function getVisibleTodos() {
  if (currentFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (currentFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

function getEmptyMessage() {
  if (currentFilter === "active") {
    return "未完了のタスクはありません。";
  }

  if (currentFilter === "completed") {
    return "完了済みのタスクはありません。";
  }

  return "まだタスクがありません。まずは1件追加してみましょう。";
}

function toggleTodo(todoId) {
  todos = todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  saveTodos();
  renderTodos();
}

function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodos();
  renderTodos();
}

function createTodoId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function updateSummary() {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  taskCount.textContent = `未完了 ${activeCount}件 / 完了 ${completedCount}件`;
  clearCompletedButton.disabled = completedCount === 0;
}

function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    // 保存できない環境でも、現在の画面ではTodo操作を続けられるようにします。
  }
}

function loadTodos() {
  let savedTodos = null;

  try {
    savedTodos = localStorage.getItem(STORAGE_KEY);
  } catch {
    return [];
  }

  if (!savedTodos) {
    return [];
  }

  try {
    return JSON.parse(savedTodos);
  } catch {
    return [];
  }
}
