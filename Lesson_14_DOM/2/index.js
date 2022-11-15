const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

creatTasks = (taskId, taskText) => {
  const tasksItem = document.createElement("div");
  tasksItem.className = "task-item";
  tasksItem.dataset.taskId = taskId;

  const tasksItemContainer = document.createElement("div");
  tasksItemContainer.className = "task-item__main-container";

  tasksItem.append(tasksItemContainer);

  const tasksItemContent = document.createElement("div");
  tasksItemContent.className = "task-item__main-content";

  const button = document.createElement("button");
  button.className = "task-item__delete-button default-button delete-button";
  button.innerText = "Удалить";

  tasksItemContainer.append(tasksItemContent, button);

  let tasksText = document.createElement("span");
  tasksText.className = "task-item__text";
  tasksText.innerText = `${taskText}`;

  const form = document.createElement("form");
  form.className = "checkbox-form";

  tasksItemContent.append(form, tasksText);

  const input = document.createElement("input");
  input.className = "checkbox-form__checkbox";
  input.type = "checkbox";
  input.id = `task-${taskId}`;

  const inputLabel = document.createElement("label");
  inputLabel.htmlFor = `task-${taskId}`;

  form.append(input, inputLabel);

  const tasksList = document.querySelector(".tasks-list");
  tasksList.append(tasksItem);

  return tasksItem;
};

tasks.forEach((item) => {
  creatTasks(item.id, item.text);
});
