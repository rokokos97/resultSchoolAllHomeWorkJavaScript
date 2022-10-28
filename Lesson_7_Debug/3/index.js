// В данном коде totalJuniorDevelopersSalary выводит почему-то значение NaN.
//Исправьте все ошибки, чтобы программа работала правильно. Также выполните следующие условия: баг должен быть исправлен при помощи console.log() либо debugger , в коде должен присутствовать минимум один console.log() либо debugger .

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
debugger;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
debugger;
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  debugger;
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;
  totalJuniorDevelopersSalary += salaryWithTax;
}
debugger;
console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);
