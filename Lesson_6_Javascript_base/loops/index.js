for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
}

let j = 0;
do {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  j += 1;
} while (j < 3);

let t = 0;
while (t <= 2) {
  let newStudent = prompt("Введите имя нового студента!");
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  t += 1;
}
