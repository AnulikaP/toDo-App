

const inputHere = document.querySelector('#writeHere');
const addNow = document.querySelector('#addHere');
const listGroup = document.querySelector('.list');
const whatToDo = document.querySelector('.listItems');

whatToDo.innerHTML = localStorage.getItem('value');

function display() {
    localStorage.setItem('myStorage', input.value);
    
}

addNow.addEventListener('click', (e) => {
    e.preventDefault();
 //   You can add a new item to the todo list (required)

 if(inputHere.value === "") {
    console.log("empty")
 }
 else {
    const newListItem = document.createElement('li');
 const newBtn = document.createElement('button');

 newBtn.textContent = "DEL";
 newBtn.style.background = 'red';
 newBtn.style.border = 'none'

 newBtn.className = "delBtn";
 

 newListItem.className = 'listItems';


const newListText = document.createTextNode(inputHere.value);

newListItem.appendChild(newListText);
newListItem.appendChild(newBtn)


//the todo list must show the most recently added item first on the list

listGroup.prepend(newListItem)


inputHere.value = '';
 }

});


//You can remove an item from the todo list (required)

listGroup.addEventListener('click', (e) => {
    if(e.target.classList.contains("delBtn")) {
        const li = e.target.parentElement

        listGroup.removeChild(li)
    }
});




