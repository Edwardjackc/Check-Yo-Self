var titleInput = document.querySelector('.input__aside--title');
var itemInput = document.querySelector('.input__aside--task');
var makeList = document.querySelector('.btn__list--make');
var clearAll = document.querySelector('.btn--list--clear');
var filterUrgency = document.querySelector('.btn--list--clear');

titleInput.addEventListener('keydown', );
itemInput.addEventListener('keydown', );
makeList.addEventListener('click', );
clearAll.addEventListener('click', );
filterUrgency.addEventListener('click', );

var globalArray = JSON.parse(localStorage.getItem()) || [];
var tasksArray = [];

function storeListInputs(id,title,urgent,tasks) {
  var listed = new List(Date.now(), titleInput.value, itemInput.value);
  globalArray.push(listed)
  listed.saveToStorage(globalArray);
}

// function pageLoad(postIdeaClass) {
//   var idea = [];
//   var local = JSON.parse(localStorage.getItem("ideasSaved"))
//   for (i = 0; i < ideaArray.length; idea++) {
//     var sameIdea = new Idea(ideaArray[i].id, ideaArray[i].title, ideaArray[i].body, ideaArray[i].quality, ideaArray[i].star).push(sameIdea)
//     console.log(sameIdea)
//   }
// }

function appendCard(idea) {
  ideaContainer.innerHTML =
    `  <article class="inactive__card">
          <section class="card__header">
            <h3>Task Title</h3>
          </section>
            <ul>
              <input class="todo__card--radio" type="radio">
              <input class="todo__card--radio" type="radio">
            </ul>
          <section class="card__footer">
            <input type="image" alt="button mark card urgent" src="images/urgent.svg"width=15px color="3c6577">
            <input type="image" alt="button delete card" src="images/delete.svg" width=15px color="#3c6577"
            width=10px>
          </section>
          </article>
      ` + ideaContainer.innerHTML;
}



function pageReload() {
  console.log(globalArray)
  if (globalArray.length !== 0) {
    globalArray.forEach(function (item) {
      appendCard(item);
    })
  }
}
/*  */ 