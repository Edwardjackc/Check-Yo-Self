var taskTitleInput = document.querySelector('.input__aside--title');
var taskInput = document.querySelector('.input__aside--task');
var btnSubmitTask = document.querySelector('.btn__aside__task--append')
var itemListContainer = document.querySelector('.insert__aside__container');
var btnMakeList = document.querySelector('.btn__list--make');
var btnClearAll = document.querySelector('.btn__list--clear');
var filterUrgency = document.querySelector('.btn__list--filter');
var listContainer = document.querySelector('.list__section__container');
var inputForm = document.querySelector('.aside__form--input')
var deleteItem = document.querySelector('.insert__aside__container')

btnSubmitTask.addEventListener('click', appendListItems);
btnMakeList.addEventListener('click',taskList);
btnClearAll.addEventListener('click',clearInputsBtn);
deleteItem.addEventListener('click', deleteAnItem)
window.addEventListener('load', pageReload);

var globalArray = JSON.parse(localStorage.getItem('savedList')) || [];


function locateIndex(e) {
  var parent = e.target.closest('article');
  var parentId = parseInt(parent.dataset.id);
  var locatedIndex = globalArray.findIndex(function(list) {
    return list.id === parentId
  })
  return locatedIndex
};

function removeFromLocalStorage(e) {
  persist();
};

function persist(){
  var stringedTasks = JSON.stringify(globalArray);
  localStorage.setItem(
    'savedList', stringedTasks);
};

function toggleClearBtn() {
  if (taskTitle && taskTitleInput != '') {
    btnClearAll.removeAttribute('disabled');
  } else {
    btnClear.setAttribute('disabled', 'disabled');
  }
};

function clearInputsBtn(e) { 
  e.preventDefault();
  taskTitleInput.value = "";
  itemListContainer.innerHTML = "";
  taskInput.value = "";
  btnClearAll.setAttribute("enable","enable");
};

function deleteCardFromStorage(e) {
  var locatedIndex = locateIndex(e);
  if (e.target.closest('article')) {
  e.target.parentElement.parentElement.remove();
  globalArray.splice(locatedIndex, 1);
  removeFromLocalStorage(e);
  }
};

function pageReload() {
  document.querySelector('.list__section__container').innerHTML="";
  if (globalArray.length !== 0) {
    globalArray.forEach(function (item) {
      appendCard(item);
    })
  }
attachEvents();
};

function attachEvents() {
  loopDelete();
  loopUrgent();
};

function loopDelete() {
  var deleteCard = document.querySelectorAll('.delete-button')
  if (deleteCard) {
    for (var i=0; i< deleteCard.length; i++)
    deleteCard[i].addEventListener('click', deleteCardFromStorage)
  };
};

function loopUrgent() {
  var urgentCard = document.querySelectorAll('.urgent-button')
  if (urgentCard) {
    for (var i = 0; i < urgentCard.length; i++)
    urgentCard[i].addEventListener('click', markAsUrgent);
  };
};

function markAsUrgent(e) {
  var locatedIndex = locateIndex(e);
  globalArray[locatedIndex].urgent ? globalArray[locatedIndex].urgent = false : globalArray[locatedIndex].urgent = true ;
  persist();
  pageReload();
};

function pageLoad() {
  var item = [];
  for (i = 0; i < globalArray.length; item++) {
    var list = new TodoList(globalArray[i].id,globalArray[i].title, globalArray[i].urgent, globalArray[i].task).push(list)
  }
};

function makeList (taskArray) {
  if (taskTitleInput.value && taskInput.value) {
  var initialList = new ToDoList (Date.now(), taskTitleInput.value, false, taskArray);
  globalArray.push(initialList)
  initialList.saveToStorage(globalArray)
  appendCard(initialList)
  }
};

function taskLoop(item){
  var string = ""
  for (var i =0; i < item.task.length; i++) {
    string += `<p>${item.task[i].content}</p>`
  }
  return string 
};

function appendCard(item) {
  listContainer.innerHTML =
    `  <article class="inactive__card" data-id=${item.id} >
          <section class="card__header">
            <h3>${item.title}</h3>
          </section>
          <section class="card__middle">
              <p class="item__form__list"><input type="image" class="delete__card__item" src='images/checkbox.svg' ${taskLoop(item)}
              </p>
          </section>
          <section class="card__footer">
            <input type="image"class="card__footer__images urgent-button  alt="button mark card urgent" src=${item.urgent === true ? 'images/urgent-active.svg' : 'images/urgent.svg'}>
            <input type="image"class="card__footer__images delete-button" alt="button delete card" src="images/delete.svg">
          </section>
          </article>
      ` + listContainer.innerHTML;
};

function appendListItems(e) {
  e.preventDefault(); 
  itemListContainer.innerHTML = 
  ` <wrapper class="insert__aside--task">
      <input type="image" class="insert__aside--btn delete-item" src='images/delete.svg' width=25px height=20px>
      <p class="insert__aside--text">${taskInput.value}
      </p>
    </wrapper>
  ` + itemListContainer.innerHTML;
};

function deleteAnItem(e) {
    e.preventDefault(e);
    var clickedItem = e.target.closest('wrapper');
    clickedItem.remove();
};

function taskList(e) {
  e.preventDefault();
  var tempArray = []
  var allTaskOutputs = document.querySelectorAll('.insert__aside--text')
  for (var i = 0; i < allTaskOutputs.length; i++) {
    var taskObject = {
      id: Date.now(),
      content: allTaskOutputs[i].innerText
    }
      tempArray.push(taskObject)
  }
  makeList(tempArray); 
};