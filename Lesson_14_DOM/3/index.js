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

const creatTasks = (taskId, taskText) => {
  const tasksItem = document.createElement("div");
  tasksItem.className = "task-item";
  tasksItem.dataset.taskId = taskId;

  const tasksItemMainContainer = document.createElement("div");
  tasksItemMainContainer.className = "task-item__main-container";

  tasksItem.append(tasksItemMainContainer);

  const tasksItemMainContent = document.createElement("div");
  tasksItemMainContent.className = "task-item__main-content";

  const buttonDelete = document.createElement("button");
  buttonDelete.className =
    "task-item__delete-button default-button delete-button";
  buttonDelete.innerText = "Удалить";

  tasksItemMainContainer.append(tasksItemMainContent, buttonDelete);

  let tasksText = document.createElement("span");
  tasksText.className = "task-item__text";
  tasksText.innerText = `${taskText}`;

  const form = document.createElement("form");
  form.className = "checkbox-form";

  tasksItemMainContent.append(form, tasksText);

  const inputCheckbox = document.createElement("input");
  inputCheckbox.className = "checkbox-form__checkbox";
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = `task-${taskId}`;

  const inputLabel = document.createElement("label");
  inputLabel.htmlFor = `task-${taskId}`;

  form.append(inputCheckbox, inputLabel);

  const tasksList = document.querySelector(".tasks-list");
  tasksList.append(tasksItem);

  return tasksItem;
};

tasks.forEach((item) => {
  creatTasks(item.id, item.text);
});

const creatTaskBlock = document.querySelector(".create-task-block");
creatTaskBlock.addEventListener("submit", (event) => {
  event.preventDefault();
  const formInputValue = event.target.taskName.value.trim();

  const duplicateTaskName = tasks.some((task) => task.text === formInputValue);
  console.log(duplicateTaskName);

  creatTasks(`${Date.now()}`, formInputValue);
});
