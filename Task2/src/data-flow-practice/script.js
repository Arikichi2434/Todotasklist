const taskList = document.querySelector("#taskList");

const tasks = [
  "HTMLの役割を説明する",
  "CSSの役割を説明する",
  "JavaScriptの役割を説明する"
];

function showTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function(task) {
    taskList.innerHTML = taskList.innerHTML + "<li>" + task + "</li>";
  });
}

showTasks();
