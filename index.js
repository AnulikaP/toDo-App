
const inputHere = document.querySelector('#writeHere');
const addNow = document.querySelector('#addHere');
const listGroup = document.querySelector('.list');
const whatToDo = document.querySelector('.listItems');



whatToDo.innerHTML = localStorage.getItem('textInput');

function display() {
    localStorage.setItem('textInput', inputHere.value);
        
}

inputHere.addEventListener('input', letter => {
    whatToDo.textContent = letter.target.value;
});


addNow.addEventListener('click', (e) => {
    e.preventDefault();

 const slowDown = inputHere.value;
 if (!slowDown) {
   return alert('Please input a Todo');
    
}
 //   You can add a new item to the todo list (required)

 if(inputHere.value === "") {
    console.log("empty")
 }
 else {
 const newListItem = document.createElement('li');
 const newBtn = document.createElement('button');
 const editbtn = document.createElement('button');

 newBtn.textContent = "Del";

 editbtn.textContent = 'Edit';

 newBtn.className = "delBtn";
 editbtn.className = 'editButton';

 newListItem.className = 'listItems';


const newListText = document.createTextNode(inputHere.value);

newListItem.appendChild(newListText);
newListItem.appendChild(newBtn);
newListItem.appendChild(editbtn);

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






