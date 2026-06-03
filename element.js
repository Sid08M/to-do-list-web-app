const todoInput = document.getElementById('todoInput');
const todoDate = document.getElementById('todoDate'); // NEW: Grab the date input
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
    const taskDate = todoDate.value; // NEW: Get the date string

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    // NEW: Date validation formula
    if (taskDate === '') {
        alert('Please select a date for your task.');
        return;
    }

    // NEW: Object conversion formula
    const newTask = {
        text: taskText,
        date: taskDate
    };

    createtask(newTask); // Passing the object instead of the string
    updateTaskCount();
    
    todoInput.value = '';
    todoDate.value = ''; // NEW: Clear the date input after adding
    
    currentTaskCount=Tasks.length;
    rendertask();
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
    rendertask();
}

function deleteTaskFromEnd() {
    if (Tasks.length === 0) {
        alert('No tasks to delete.');
        return;
    }
    Tasks.pop();
    currentTaskCount--;
    displayTaskCount();
    rendertask();
}

function displayTaskCount() {
    taskCountDisplay.textContent = currentTaskCount;
}

function rendertask(){
    todoList.innerHTML = '';
    
    if (Tasks.length === 0) {
        todoList.innerHTML = '<div class="empty-message">No tasks yet</div>';
        return;
    }
    Tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        // MODIFIED: Injecting task.text and task.date from the object
        taskItem.innerHTML = `
            <div class="task-info">
                <span class="task-text">${task.text}</span>
                <span class="task-date-display">📅 ${task.date}</span>
            </div>
            <button onclick="deleteSpecificTask(${index})" class="delete-btn">Delete</button>
        `;
        todoList.appendChild(taskItem);
    });
}

function deleteSpecificTask(index) {
    if (index < 0 || index >= Tasks.length) {
        alert('Invalid task.');
        return;
    }
    Tasks.splice(index, 1);
    currentTaskCount = Tasks.length;
    rendertask();
    displayTaskCount();
}