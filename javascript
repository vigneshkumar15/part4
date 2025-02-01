// Handle To-Do list operations
const taskList = document.getElementById('task-list');
const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');

// Function to create a task
function createTask(taskContent) {
    const task = document.createElement('li');
    task.textContent = taskContent;

    // Attach event listeners to the task for toggling completion and deleting
    task.addEventListener('click', toggleTaskCompletion);
    task.addEventListener('dblclick', deleteTask);

    return task;
}

// Mark a task as completed by toggling 'completed' class
function toggleTaskCompletion(event) {
    event.target.classList.toggle('completed');
}

// Delete a task from the list
function deleteTask(event) {
    taskList.removeChild(event.target);
}

// Add a new task when the button is clicked
addTaskButton.addEventListener('click', () => {
    const taskContent = todoInput.value.trim();
    if (!taskContent) {
        return;
    }

    const newTask = createTask(taskContent);
    taskList.appendChild(newTask);
    todoInput.value = ''; // Clear input field
});

// Prevent the user from adding empty tasks
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});
