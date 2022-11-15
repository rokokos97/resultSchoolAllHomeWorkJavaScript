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

  const taskItemDeleteButton = document.createElement("button");
  taskItemDeleteButton.className =
    "task-item__delete-button default-button delete-button";
  taskItemDeleteButton.innerText = "Удалить";
  tasksItemMainContainer.append(tasksItemMainContent, taskItemDeleteButton);

  let taskItemText = document.createElement("span");
  taskItemText.className = "task-item__text";
  taskItemText.innerText = `${taskText}`;

  const checkboxForm = document.createElement("form");
  checkboxForm.className = "checkbox-form";

  tasksItemMainContent.append(checkboxForm, taskItemText);

  const checkboxFormInput = document.createElement("input");
  checkboxFormInput.className = "checkbox-form__checkbox";
  checkboxFormInput.type = "checkbox";
  checkboxFormInput.id = `task-${taskId}`;

  const checkboxFormInputLabel = document.createElement("label");
  checkboxFormInputLabel.htmlFor = `task-${taskId}`;

  checkboxForm.append(checkboxFormInput, checkboxFormInputLabel);

  const tasksList = document.querySelector(".tasks-list");
  tasksList.append(tasksItem);

  return tasksItem;
};

const createErrorBlock = (errorMassage) => {
  const errorBlock = document.createElement("span");
  errorBlock.className = "error-message-block";
  errorBlock.innerText = errorMassage;
  return errorBlock;
};

const createTaskForm = document.querySelector(".create-task-block");
createTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTaskText = (e.target.taskName.value || "").trim();
  console.log(newTaskText);
  const isTaskExist = tasks.some((task) => task.text === newTaskText);
  const errorMassageBlockFromDOM = createTaskForm.querySelector(
    ".error-message-block"
  );
  if (!newTaskText) {
    const errorBlock = createErrorBlock(
      "Название задачи не должно быть пустым"
    );
    createTaskForm.append(errorBlock);
  } else if (isTaskExist) {
    const errorBlock = createErrorBlock(
      "Задача с таким названием уже существует."
    );
    createTaskForm.append(errorBlock);
  } else if (newTaskText && !isTaskExist) {
    const newTask = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };
    tasks.push(newTask);
    const taskItem = creatTasks(newTask.id, newTask.text);
    taskListContainer.append(taskItem);
  }
  if (errorMassageBlockFromDOM) {
    errorMassageBlockFromDOM.remove();
  }
});

const taskListContainer = document.querySelector(".tasks-list");
tasks.forEach((task) => {
  const newTask = creatTasks(task.id, task.text);
  taskListContainer.append(newTask);
});
