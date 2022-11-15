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

let isDarkThem = false;

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

  if (isDarkThem) {
    tasksItem.style.color = "#ffffff";
  }
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
const createModalOverlay = (text) => {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay modal-overlay_hidden";
  document.body.append(modalOverlay);

  const deleteModal = document.createElement("div");
  deleteModal.className = "delete-modal";
  modalOverlay.append(deleteModal);

  const deleteModalQuestion = document.createElement("h3");
  deleteModalQuestion.className = "delete-modal__question";
  deleteModalQuestion.innerText = text;

  const deleteModalButtons = document.createElement("div");
  deleteModalButtons.className = "delete-modal__buttons";
  deleteModal.append(deleteModalQuestion, deleteModalButtons);

  const deleteModalCancel = document.createElement("button");
  deleteModalCancel.className =
    "delete-modal__button delete-modal__cancel-button";
  deleteModalCancel.innerText = "Cancel";

  const deleteModalConfirm = document.createElement("button");
  deleteModalConfirm.className =
    "delete-modal__button delete-modal__confirm-button";
  deleteModalConfirm.innerText = "Delete";
  deleteModalButtons.append(deleteModalCancel, deleteModalConfirm);

  return { modalOverlay, deleteModal, deleteModalCancel, deleteModalConfirm };
};
let targetTaskIdToDelete = null;
const { modalOverlay, deleteModalCancel, deleteModalConfirm } =
  createModalOverlay("You really want to delete this task?");
document.body.append(modalOverlay);
deleteModalCancel.addEventListener("click", () => {
  modalOverlay.classList.toggle("modal-overlay_hidden");
});
deleteModalConfirm.addEventListener("click", () => {
  const deleteIndex = tasks.findIndex(
    (task) => task.id === targetTaskIdToDelete
  );
  if (deleteIndex >= 0) {
    tasks.splice(deleteIndex, 1);
    const taskItemHTML = document.querySelector(
      `[data-task-id="${targetTaskIdToDelete}"]`
    );
    taskItemHTML.remove();
    modalOverlay.classList.toggle("modal-overlay_hidden");
  }
  const errorMassageBlockFromDOM = createTaskForm.querySelector(
    ".error-message-block"
  );
  if (errorMassageBlockFromDOM) {
    errorMassageBlockFromDOM.remove();
  }
});

taskListContainer.addEventListener("click", (e) => {
  const isTaskDeleteButton = e.target.closest(".task-item__delete-button");
  console.log(isTaskDeleteButton);
  if (isTaskDeleteButton) {
    const targetTaskItem = isTaskDeleteButton.closest(".task-item");
    if (targetTaskItem) {
      modalOverlay.classList.toggle("modal-overlay_hidden");
      targetTaskIdToDelete = targetTaskItem.getAttribute("data-task-id");
    }
  }
});

const changeThem = ({ newBackground, newColor, newBorder }) => {
  document.body.style.background = newBackground;
  document
    .querySelectorAll(".task-item")
    .forEach((task) => (task.style.color = newColor));
  document
    .querySelectorAll("button")
    .forEach((button) => (button.style.border = newBorder));
};

window.addEventListener("keydown", (e) => {
  const { key } = e;
  if (key === "Tab") {
    e.preventDefault();
  }
  isDarkThem = !isDarkThem;
  if (isDarkThem) {
    changeThem({
      newBackground: "#24292E",
      newColor: "#ffffff",
      newBorder: "1px solid #ffffff",
    });
  } else {
    changeThem({
      newBackground: "initial",
      newColor: "initial",
      newBorder: "none",
    });
  }
});
