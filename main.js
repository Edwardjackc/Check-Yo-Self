var taskTitleInput = document.querySelector('.input__aside--title');
var taskInput = document.querySelector('.input__aside--task');
var btnSubmitTask = document.querySelector('.btn__aside__task--append')
var itemListContainer = document.querySelector('.item__container--to-do');
var btnMakeList = document.querySelector('.btn--list--make');
var clearAll = document.querySelector('.btn--list--clear');
var filterUrgency = document.querySelector('.btn--list--filter');
var listContainer = document.querySelector('.list__section__container')

// titleInput.addEventListener();
btnSubmitTask.addEventListener('click', appendListItems);
btnMakeList.addEventListener('click',makeList);
// clearAll.addEventListener('click', );
// filterUrgency.addEventListener('click', );
window.addEventListener("load", pageReload);

var globalArray = JSON.parse(localStorage.getItem('savedList')) || [];
var taskArray = [];
// function storeListInputs(id,title,urgent,tasks) {
//   var listed = new ToDoList(Date.now(), titleInput.value, urgent,tasks.value );
//   globalArray.push(listed)
//   listed.saveToStorage(globalArray);
// }

// function locateIndex(target) {
//   var parent = target.closest('article');
//   var parentID = parseInt(parent.dataset.id);
//   var index = lists.findIndex(element => element.id === parentID);
//   return index;
// }

function locateIndex(e) {
  var parent = e.target.closet('article');
  var parentId = parseInt(parent.dataset.id);
  var locatedIndex = globalArray.findIndex(function(list) {
    list.id === parentId.id
  })
  return locatedIndex
}


function removeCard(e) {
  var targetId = locateIndex();
  if (e.target.className === 'btn__card--delete') {
    e.target.parentElement.parentElement.remove();
    globalArray.deleteFromStorage(targetId)
    console.log(e)
  }
}

// function pageReload() {
//   console.log(globalArray)
//   if (globalArray.length !== 0) {
//     globalArray.forEach(function (item) {
//       appendCard(item)
//     })
//   }
// }
function pageReload() {
  console.log(globalArray)
  if (globalArray.length !== 0) {
    globalArray.forEach(function (item) {
      appendCard(item);
    })
  }
}

function pageLoad() {
  var item = [];
  for (i = 0; i < globalArray.length; item++) {
    var list = new TodoList(globalArray[i].id,globalArray[i].title, globalArray[i].urgent, globalArray[i].task).push(list)
    console.log(list)
  }
}

function makeList (e) {
  if (taskTitleInput.value && taskInput.value) {
  e.preventDefault();
  var initialList = new ToDoList (Date.now(), taskTitleInput.value, taskArray);
  globalArray.push(initialList)
  initialList.saveToStorage(globalArray)
  appendCard(initialList)
  }
}



function taskList(item) {
  var taskObject = {
    id : Date.now(),
    content : item,
    completed: false
  }
  taskArray.push(taskObject)
}

function taskLoop(item){
  for(var i = 0 ; i< item.task.length; i++) {
  
  }
}

function appendCard(item) {
  listContainer.innerHTML =
    `  <article class="inactive__card" data-id${item.id} >
          <section class="card__header">
            <h3>${item.title}</h3>
          </section>
            <ul>
              <li>
              <p>${taskLoop(item)}
              </p>
              </li>
            </ul>
          <section class="card__footer">
            <input type="image" alt="button mark card urgent" src=${item.urgent === true ? 'images/urgent-active.svg' : 'images/urgent.svg'}  color="#3c6577">
            <input type="image"class="btn__card--delete" alt="button delete card" src="images/delete.svg" width=15px color="#3c6577"
            width=10px>
          </section>
          </article>
      ` + listContainer.innerHTML;
}

function appendListItems(e) {
  e.preventDefault(); 
  itemListContainer.innerHTML = 
  ` <li class="task__aside">
      <img src='images/delete.svg'>
      <p class="task__p-input">${taskInput.value}
      </p>
    </li>
  ` + itemListContainer.innerHTML;
  taskList(taskInput.value);
  console.log(taskArray)
}

// conditional that stops an empty input  


/*  */ 