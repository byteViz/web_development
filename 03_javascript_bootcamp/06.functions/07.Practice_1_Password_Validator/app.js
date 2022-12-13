// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(userName, password) {
  if (password.length < 8) {
    return "invalid password. password must be 8 letters or more";
  } else if (password.indexOf(" ") !== -1) {
    return "password must not contain spaces. Try again!";
  } else if (password.indexOf(userName) !== -1) {
    return "password cannot contain username. try again";
  }
  return true;
}

console.log(isValidPassword("89Fjj1nms", "dogLuvr")); //true
console.log(isValidPassword("dogLuvr123!", "dogLuvr123!")); //false
console.log(isValidPassword("hello1", "dog Luvr214")); //false
