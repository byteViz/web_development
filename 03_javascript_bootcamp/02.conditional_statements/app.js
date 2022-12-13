let command = "";
const todo = [];
let newItem = "";
while (command !== "quit") {
  command = prompt("what would you like to do?");
  command = command.trim().toLowerCase();
  switch (command) {
    case "new":
      newItem = prompt("what do you like to add to the Todo List?");
      todo.push(newItem);
      console.log(`${newItem} was added to the list`);
      break;
    case "list":
      console.log("*****************");
      console.log("This is your Todo:");
      for (let k in todo) {
        console.log(`${k} : ${todo[k]}`);
      }
      console.log("*****************");
      break;
    case "delete":
      deleteKey = prompt(
        "provide the index of the item to be removed form the list"
      );
      console.log(`${todo.splice(deleteKey, 1)} was removed from the todo`);
      break;
    case "quit":
      console.log("you have quit the app");
      break;
    default:
      console.log("invalid input. try again!");
      break;
  }
}
