//Variables
const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

console.log(addTask);
console.log(inputTask);
console.log(taskContainer);

function showTask(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let updateButton = document.createElement("button");
    updateButton.innerHTML = '<i class="fa-solid fa-sync"></i>';
    updateButton.classList.add('updateTask');
    task.appendChild(updateButton);


    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
    // console.log(task);
    // console.log(taskContainer);

    if(inputTask.value === "") {
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function(){

        checkButton.parentElement.style.textDecoration = "line-through";

    });

    updateButton.addEventListener('click', function() {
        let task = updateButton.parentElement;
        console.log("task",task);
        let oldTask = task.innerText;
        task.innerHTML = `<input type="Text" placeholder="${oldTask}" id="update-task">`;

        var doneButton = document.createElement("button");
        doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        doneButton.classList.add('doneTask');
        task.appendChild(doneButton);

        var cancelButton = document.createElement("button");
        cancelButton.innerHTML = '<i class="fa-solid fa-times"></i>';
        cancelButton.classList.add('cancelTask');
        task.appendChild(cancelButton);

        // var inputElement = document.getElementById('update-task');
        // var currentTask = inputElement.getAttribute('placeholder');
        const updateInputTask = document.getElementById('update-task');

        doneButton.addEventListener('click',function(e){
            inputTask.value = `${updateInputTask.value}`;
            updateInputTask.parentElement.remove();
            showTask();
        });

        cancelButton.addEventListener('click',function(e){
            inputTask.value = `${updateInputTask.getAttribute('placeholder')}`;
            updateInputTask.parentElement.remove();
            showTask();
        })
    });

    deleteButton.addEventListener('click', function(e){

        let target = e.target;
        console.log("Here::",target.outerHTML,"lalal");
        console.log("Here::",target.parentElement.parentElement);
        if(target.outerHTML == `<button class="deleteTask"><i class="fa-solid fa-trash-can"></i></button>`){
            target.parentElement.remove();
        }else{
            target.parentElement.parentElement.remove();
        }
    });
}

//Functions
addTask.addEventListener('click', function(){

    showTask();
    });
