let todos = [];
let res = prompt("enter your request");

while (true) {
  if (res == "quit") {
    console.log("quiting the todo app");
    break;
  } else if (res == "list") {
    console.log("-------------------------------");
    for (let i = 0; i < todos.length; i++) {
      console.log(i, todos[i]);
    }
    console.log("-----------------------------");
  } else if (res == "add") {
    let task = prompt("Please enter your task");
    todos.push(task);
    console.log("task added");
  } else if (res == "delete") {
    let del = prompt("Enter the index to delete task from todo app");
    todos.splice(del, 1);
    console.log("task deleted");
  }
  res = prompt("enter your request");
}
