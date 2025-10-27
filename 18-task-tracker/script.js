const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask(taskText) {
  if (!taskText.trim()) return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.innerHTML = "🗑️";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  // Add event listeners
  checkbox.addEventListener("change", () => toggleTask(li));
  delBtn.addEventListener("click", () => li.remove());

  taskList.appendChild(li);
  sortTasks();
}

function toggleTask(taskItem) {
  taskItem.classList.toggle("completed");
  sortTasks();
}

function sortTasks() {
  const tasks = Array.from(taskList.children);
  const pending = tasks.filter(t => !t.classList.contains("completed"));
  const completed = tasks.filter(t => t.classList.contains("completed"));
  taskList.innerHTML = "";
  [...pending, ...completed].forEach(t => taskList.appendChild(t));
}

// Add task when clicking button
addTaskBtn.addEventListener("click", () => {
  addTask(taskInput.value);
  taskInput.value = "";
});

// Add task on Enter key
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTask(taskInput.value);
    taskInput.value = "";
  }
});
