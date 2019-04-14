var titleInput = document.querySelector('.input__aside--title');
var taskInput = document.querySelector('.input__aside--task');
var itemListContainer = document.querySelector('.item__container--to-do');
var makeList = document.querySelector('.btn__list--make');
var clearAll = document.querySelector('.btn--list--clear');
var filterUrgency = document.querySelector('.btn--list--filter');
var listContainer = document.querySelector('.list__section__container')

// titleInput.addEventListener();
taskInput.addEventListener('input', appendListItems);
// appendListItems.addEventListener('click',);
// makeList.addEventListener('click',)
// clearAll.addEventListener('click', );
// filterUrgency.addEventListener('click', );
// window.addEventListener("load", pageReload);

// var globalArray = JSON.parse(localStorage.getItem()) || [];

// function storeListInputs(id,title,urgent,tasks) {
//   var listed = new ToDoList(Date.now(), titleInput.value, urgent,tasks.value );
//   globalArray.push(listed)
//   listed.saveToStorage(globalArray);
// }

// function findIndex(targetId) {
//   var itemIndex = ideaArray.findIndex(function (list) {
//     return list.id === targetId;
//   })
// }

// function findItem(){
// var 
// }

// function pageReload() {
//   console.log(globalArray)
//   if (globalArray.length !== 0) {
//     globalArray.forEach(function (item) {
//       appendCard(item)
//     })
//   }
// }

// function pageLoad() {
//   globalArray.map(relist => {
//     relist = new ToDoList(item.id, item.title, item.urgent, item.task)
//     return relist;
//   })
// }
// is this return needed ? 

// function appendCard(cardList) {
//   Container.innerHTML =
//     `  <article class="inactive__card" data-id${cardList.id} >
//           <section class="card__header">
//             <h3>${cardList.title}</h3>
//           </section>
//             <ul>
//               <li>${cardList.task}</li>
//             </ul>
//           <section class="card__footer">
//             <input type="image" alt="button mark card urgent" src=${cardList.urgent === true ? 'images/urgent-active.svg' : 'images/urgent.svg'}"images/urgent.svg" width=15px color="3c6577">
//             <input type="image" alt="button delete card" src="images/delete.svg" width=15px color="#3c6577"
//             width=10px>
//           </section>
//           </article>
//       ` + listContainer.innerHTML;
// }

function appendListItems() {
  itemListContainer.innerHTML = 
  ` <li class="list__task">
      <input class="task__form--items" type='button' svg='images/delete.svg'>
      <p>
      </p>
      </input>
    </li>
  ` + itemListContainer.innerHTML;
}

// conditional that stops an empty input  


/*  */ 