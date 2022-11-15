// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.technologies = [];
//   this.status = "Junior";
//   this.setTechnologies = function (technologies) {
//     this.technologies = [...this.technologies, ...technologies];
//   };
//   this.setNewStatus = function (newStatus) {
//     this.status = newStatus;
//   };
// }

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = "Junior";
  }
  setTechnologies(technologies) {
    this.technologies = [...this.technologies, ...technologies];
  }
  setNewStatus(newStatus) {
    this.status = newStatus;
  }
}
const student = new Student("Maxim", 20);
const student2 = new Student("Rostyslav", 36);
student2.setTechnologies(["HTML", "CSS", "JavaScript"]);
student2.setNewStatus("Junior");
console.log(student);
console.log(student2);
