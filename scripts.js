let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clear = document.getElementById('clear');
let empty = document.getElementById('empty');
let save = document.getElementById('save');
let listItem = document.getElementById('listItems');

addToDoButton.addEventListener('click', function(){
    if (inputField.value != ''){
        addElements();
    }
    else
        alert('Error!');

})

// clear.addEventListener('click', function(){
//     alert('clear');
// })

empty.addEventListener('click', function(){
    // alert('empty');
    localStorage.clear();
    window.location.reload();
    // console.log(localStorage);
})

setInterval(save.addEventListener('click', function(){
    // console.log(toDoContainer.children.length);
    var task = [];
    for (var i = 0; i < toDoContainer.children.length; i++){
        var toDo = toDoContainer.children.item(i);
        var savedTask = toDo.children[0].innerText;
        // console.log("This is the inputField value: " + toDo.children[0].innerText);
        
        var todoInfo = {
            'task': savedTask
        };

            task.push(todoInfo);
    }
    // console.log(task);
    localStorage.setItem("task", JSON.stringify(task));
    // console.log(localStorage);
    }), 60000);

function loadList() {
    if(localStorage.getItem('task') != null){
        var task = JSON.parse(localStorage.getItem("task"));
        
        for (var i = 0; i < task.length; i++) {
            var toDo = task[i];
            // console.log(toDo.task);
            showList(toDo.task);
        }
    }
    else{
        console.log('Local storage is empty');
    }
}
loadList();

function showList(loadedData){
    showLocalStorageElements(loadedData);
}

function addElements(){
    var list = document.createElement('li'); //Create li Element on Click
    var button = document.createElement('BUTTON'); //Create Button Element onclick
    var paragraph = document.createElement("p");
    
    list.classList.add('listItems'); //Add "listItems" class to the 'li' Element on every create

    button.innerHTML = "x";   //Add name on button
    paragraph.classList.add('para'); 
    button.classList.add('buttonClass', 'clearfix');   //Add "buttonClass" class to the 'button' Element on every create
    button.addEventListener('click', function(){
        this.parentElement.remove();
    });
    toDoContainer.appendChild(list);   // Append the newly created list into the todoContainer
    list.appendChild(paragraph); // Append the newly created paragraph into the "li" list
    paragraph.innerText = inputField.value; //get the value from "inputField" inputText and set into the newly created "li" element
    list.appendChild(button); //Append button element inside every list item
    inputField.value = '';
    inputField.focus();
}

function showLocalStorageElements(loadedData){
    var list = document.createElement('li'); //Create li Element on Click
    var button = document.createElement('BUTTON'); //Create Button Element onclick
    var paragraph = document.createElement("p");
    
    list.classList.add('listItems'); //Add "listItems" class to the 'li' Element on every create

    button.innerHTML = "x";   //Add name on button

    paragraph.classList.add('para'); 
    button.classList.add('buttonClass', 'clearfix');   //Add "buttonClass" class to the 'button' Element on every create
    button.addEventListener('click', function(){
        this.parentElement.remove();
    });
    toDoContainer.appendChild(list);   // Append the newly created list into the todoContainer
    list.appendChild(paragraph); // Append the newly created paragraph into the "li" list
    paragraph.innerText = loadedData; //get the value from "inputField" inputText and set into the newly created "li" element
    // toDoContainer.appendChild(button);
    list.appendChild(button); //Append button element inside every list item
    inputField.value = '';
    inputField.focus();
}