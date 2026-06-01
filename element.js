const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const deleteStartBtn = document.getElementById('deleteStartBtn');
const deleteEndBtn = document.getElementById('deleteEndBtn');
const todoList = document.getElementById('todoList');
const taskCountDisplay = document.getElementById('taskCount');

let currentTaskCount = 0;
const emptyMessageHTML = '<div>No tasks added yet.</div>';

let Tasks =[];
function createtask(task){
    Tasks.push(task);
    console.log("Task added:", task);
    return Tasks;
    
}

function updateTaskCount() {   
    taskCountDisplay.textContent = currentTaskCount+1;
}

function readtask(){
    console.log("current tasks:", Tasks);   
    return Tasks;
}

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    createtask(taskText);
    updateTaskCount();
    todoInput.value = '';
    currentTaskCount=Tasks.length;
}

function updateTask(index, newTask) {
    if (index < 0 || index >= Tasks.length) {
        alert('Invalid task index.');
        return;
    }
    Tasks[index] = newTask;
    updateTaskCount();
}

function deleteTaskFromStart() {
    if (Tasks.length === 0) {
        alert('No tasks to delete.');
        return;
    }
    Tasks.shift();
    currentTaskCount--;
    displayTaskCount();
}

function deleteTaskFromEnd() {
    if (Tasks.length === 0) {
        alert('No tasks to delete.');
        return;
    }
    Tasks.pop();
    currentTaskCount--;
    displayTaskCount();
}

function displayTaskCount() {
    taskCountDisplay.textContent = currentTaskCount;
}