class List {
  constructor() {
    this.id = id; 
    this.title = title;
    this.urgent = urgent || false;
    this.tasks = task || 0
  }

  saveToStorage() {
    var stringTasks = JSON.stringify(globalArray);
    localStorage.setItem(
    'updateMetoTaskSaved', stringTasks);
  }
}

