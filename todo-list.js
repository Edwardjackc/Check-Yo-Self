class ToDoList {
  constructor(id, title, urgent, tasks) {
    this.id = id; 
    this.title = title;
    this.urgent = urgent || false;
    this.task =[{id:id,name:task, completed:false}] || 0
  }

saveToStorage() {
    var stringedTasks = JSON.stringify(globalArray);
    localStorage.setItem(
    'savedList', stringedTasks);
  }
}

// deleteFromStorage() {
// findIndex(itemIndex) {
//   globalArray.splice(itemIndex, 1);
//   localStorage.setItem("listSaved", JSON.stringify(globalArray));
// }
// }
// updateTask() {
// some() breaks out of the loop once a true value is found 
// every() checks all items in an array 
// }
