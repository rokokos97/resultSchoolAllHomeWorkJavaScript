const userPass = prompt("Enter your password");
if (userPass.length >= 3 && userPass.length <= 20) {
  let isNumber = false;
  let isUpper = false;
  for (i = 0; i <= userPass.length - 1; i++) {
    let symbol = userPass[i];
    if (!isNaN(parseInt(symbol))) {
      isNumber = true;
    }
    if (isNaN(parseInt(symbol)) && symbol === symbol.toUpperCase()) {
      isUpper = true;
    }
  }
  if (isNumber && isUpper) {
    alert("Your password is valid");
  } else {
    alert("Your password is not valid");
  }
}
