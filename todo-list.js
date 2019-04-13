class List {
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

