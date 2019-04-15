class ToDoList {
  constructor(id, title, urgent, task) {
    this.id = id; 
    this.title = title;
    this.urgent = urgent || false;
    this.task = task || []
  }

saveToStorage() {
    var stringedTasks = JSON.stringify(globalArray);
    localStorage.setItem(
    'savedList', stringedTasks);
  }


// deleteFromStorage(itemIndex) {
//   globalArray.splice(itemIndex, 1);
//   localStorage.setItem("listSaved", JSON.stringify(globalArray));
// }
// }
// updateTask() {
// some() breaks out of the loop once a true value is found 
// every() checks all items in an array 
// }
//[{id:math.random(),name:task, completed:false}] || 0