let existingUserLogin = "the_best_user";
let existingUserPassword = "12345678";

let userLogin = prompt("Enter your login").trim();
let userPassword = Number(prompt("Enter your password").trim());

if (existingUserLogin === userLogin || existingUserPassword === userPassword) {
  alert(`Welcome user ${existingUserLogin}`);
} else {
  alert(`Login or password incorrect`);
}
