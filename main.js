var taskTitleInput = document.querySelector('.input__aside--title');
var taskInput = document.querySelector('.input__aside--task');
var btnSubmitTask = document.querySelector('.btn__aside__task--append')
var itemListContainer = document.querySelector('.item__container--to-do');
var btnMakeList = document.querySelector('.btn--list--make');
var btnClearAll = document.querySelector('.btn--list--clear');
var filterUrgency = document.querySelector('.btn--list--filter');
var listContainer = document.querySelector('.list__section__container');
var inputForm = document.querySelector('.aside__form--input')
// titleInput.addEventListener();
btnSubmitTask.addEventListener('click', appendListItems);
btnMakeList.addEventListener('click',taskList);
btnClearAll.addEventListener('click',clearInputsBtn);
// filterUrgency.addEventListener('click', );
window.addEventListener('load', pageReload);

var globalArray = JSON.parse(localStorage.getItem('savedList')) || [];
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


function toggleClearBtn() {
  if (taskTitle && taskTitleInput != '') {
    btnClearAll.removeAttribute('disabled');
  } else {
    btnClear.setAttribute('disabled', 'disabled');
  }
};

function clearInputsBtn(e) { 
  e.preventDefault();
  inputForm.reset();
  btnClearAll.setAttribute("enable","enable")
};

function removeCard(e) {
  var locatedIndex = locateIndex();
  if (e.target.className === "btn__card--delete") {
  e.target.parentElement.parentElement.remove();
  locatedIndex.deleteFromStorage(targetId)
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
  }
}

function makeList (taskArray) {
  if (taskTitleInput.value && taskInput.value) {
  var initialList = new ToDoList (Date.now(), taskTitleInput.value, false, taskArray);
  globalArray.push(initialList)
  initialList.saveToStorage(globalArray)
  appendCard(initialList)
  }
}

function taskLoop(item){
  var string = ""
  for (var i =0; i < item.task.length; i++) {
    string += `<p>${item.task[i].content}</p>`
  }
  return string 
  }

function appendCard(item) {
  console.log(globalArray)
  listContainer.innerHTML =
    `  <article class="inactive__card" data-id${item.id} >
          <section class="card__header">
            <h3>${item.title}</h3>
          </section>
            <ul>
              <li>
              <p class="item__form__list">${taskLoop(item)}
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
  ` <li class="task__item">
      <img src='images/delete.svg'>
      <p class="task__p-input">${taskInput.value}
      </p>
    </li>
  ` + itemListContainer.innerHTML;
}

function taskList(e) {
  e.preventDefault();
  var tempArray = []
  var allTaskOutputs = document.querySelectorAll('.task__p-input')
  for (var i = 0; i < allTaskOutputs.length; i++) {
    var taskObject = {
      id: Date.now(),
      content: allTaskOutputs[i].innerText
  }
      tempArray.push(taskObject)
  }
  makeList(tempArray); 
}
// conditional that stops an empty input  


/*  */ 