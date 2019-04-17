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


deleteFromStorage(itemIndex) {
  parsedItems.splice(itemIndex, 1);
  localStorage.setItem("ideasSaved", JSON.stringify(parsedItems));
}

}