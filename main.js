var titleInput = document.querySelector('.input__aside--title');
var taskInput = document.querySelector('.input__aside--task');
var toDoItems = document.querySelector('.aside__form--to-do');
var makeList = document.querySelector('.btn__list--make');
var clearAll = document.querySelector('.btn--list--clear');
var filterUrgency = document.querySelector('.btn--list--filter');
var taskContainer = document.querySelector('.list__section__container')

titleInput.addEventListener('keydown', );
taskInput.addEventListener('keydown',);
makeList.addEventListener('click', makeTaskList);
clearAll.addEventListener('click', );
filterUrgency.addEventListener('click', );

var globalArray = JSON.parse(localStorage.getItem()) || [];
var tasksArray = [];

makeTaskList(storeListInputs) {

}



function storeListInputs(id,title,urgent,tasks) {
  var listed = new ToDoList(Date.now(), titleInput.value,tasks.value,taskInput.value);
  globalArray.push(listed)
  listed.saveToStorage(globalArray);
}

function pageReload() {
  console.log(globalArray)
  if (globalArray.length !== 0) {
    globalArray.forEach(function (item) {
      appendCard(item);
    })
  }
}

function pageLoad() {
  globalArray.map(relist => {
    relist = new ToDoList(item.id, item.title, item.urgent, item.tasks)
    return relist;
  })
}


function taskIdeas() {

}


function appendCard(cardList) {
  Container.innerHTML =
    `  <article class="inactive__card" data-id${cardList.id} >
          <section class="card__header">
            <h3>${cardList.title}</h3>
          </section>
            <ul>
              <li>${cardList.tasks}</li>
            </ul>
          <section class="card__footer">
            <input type="image" alt="button mark card urgent" src=${cardList.urgent === true ? 'images/urgent-active.svg' : 'images/urgent.svg'}"images/urgent.svg" width=15px color="3c6577">
            <input type="image" alt="button delete card" src="images/delete.svg" width=15px color="#3c6577"
            width=10px>
          </section>
          </article>
      ` + ideaContainer.innerHTML;
}

funtion appendList() {
  container. 
}




/*  */ 