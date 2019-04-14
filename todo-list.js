class ToDoList {
  constructor(id, title, urgent, tasks) {
    this.id = id; 
    this.title = title;
    this.urgent = urgent || false;
    this.tasks = tasks || 0;
  }

saveToStorage() {
    var stringedTasks = JSON.stringify(globalArray);
    localStorage.setItem(
    'savedList', stringedTasks);
  }
}

deleteFromStorage() {
  findIndex(targetId)
  ideaArray.splice(itemIndex, 1);
  localStorage.setItem("listSaved", JSON.stringify(globalArray));
}
}

updateTask() {

}
